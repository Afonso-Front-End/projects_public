import { useEffect, useState, useRef } from "react";
import { socket } from "../socket";
import useJwtToken from "./Token";

const UseEvents = () => {


    const { userLog } = useJwtToken()

    const [results, setResults] = useState(false)

    const [resultsSearch, setResultsSearch] = useState([])
    const [value, setValue] = useState('')
    const [mensagem, setMensagem] = useState('')

    const [lista, setLista] = useState(false)
    const [listaUsuarios, setListaUsuarios] = useState([])

    const [notification, setNotification] = useState(false)
    const [mensagemNotification, setMensagemNotification] = useState([])

    const [chat, setChat] = useState(false)

    const [mensagemText, setMensagemText] = useState('')
    const [userSelected, setUserSelected] = useState([])

    const [chatHistory, setChatHistory] = useState([])

    const [messageWelcome, setMessageWelcome] = useState(true)

    const [profileConfig, setProfileConfig] = useState(false)

    const [activeLi, setActiveLi] = useState(null)

    useEffect(() => {

        socket.on('resultadoPesquisa', (resultadoPesquisa) => {

            if (resultadoPesquisa.length > 0) {
                setResults(true)
                setResultsSearch(
                    {
                        nome: resultadoPesquisa[0].nome,
                        email: resultadoPesquisa[0].email,
                        identifier: resultadoPesquisa[0].identifier,
                        img: resultadoPesquisa[0].url_imagem,
                    }
                )
            }
            else {
                setMensagem('Nenhum usuario encontrado!')
                setTimeout(()=>{
                    setMensagem('')
                },5000)
            }
        });

        socket.on('notificationEnviada', (mensagem) => {
            if (mensagem) {
                setNotification(true)
                setMensagemNotification(mensagem)
                setTimeout(() => {
                    setNotification(false)
                }, 5000)
                return
            }
        })

        socket.on('notificationRecebida', (mensagem) => {
            if (mensagem) {
                setMensagem('Ja adicionando!')
                setTimeout(() => {
                    setMensagem('')
                }, 5000)
            }
        })

        socket.on('sucess', (mensagem) => {
            setValue('')
            setResults(false)
            setResultsSearch([])
            setMensagem("Adicionado com sucesso!")

            setTimeout(() => {
                setMensagem('')
            }, 5000)
        })

        socket.on('lista', (data) => {
            if (data.length > 0) {
                setLista(true)
                setListaUsuarios(data)
            }
        })

        socket.on('novaMensagem', (mensagem) => {
            setChatHistory([...chatHistory, mensagem]);
        });

        socket.on('mensagemEnviada', (mensagem) => {
            setChatHistory([...chatHistory, mensagem]);
        });

        socket.on('historicoMensagens', (mensagem) => {
            // Formatar cada mensagem do histórico antes de adicionar ao estado
            const historicoFormatado = mensagem.historico.map(formatarMensagemParaRenderizar);
            setChatHistory([...chatHistory, ...historicoFormatado]);
        });

        return () => {
            socket.off('resultadoPesquisa');
            socket.off('notificationEnviada');
            socket.off('sucess');
            socket.off('lista');
            socket.off('history');
        };

    }, [chatHistory]);

    useEffect(() => {
        socket.emit('listaUsuarios', (userLog.identifier))

    }, [userLog.identifier])

    const handleSearch = () => {
        if (value.trim('') === '') {
            setResults(false)
            setResultsSearch([])
            setMensagem('Digite um identificador!')
            setTimeout(()=>{
                setMensagem('')
            },5000)
        } else {
            socket.emit('pesquisar', value);
            setMensagem('')
        }
    };

    const handleAdicioanar = (dadosUsuarioSearch) => {
        socket.emit('adicionar',
            {
                identifier: userLog.identifier,
                identifier_friend: dadosUsuarioSearch.identifier,
                nome: dadosUsuarioSearch.nome,
                email: dadosUsuarioSearch.email,
                img: dadosUsuarioSearch.img,

            }, {
            identifier: dadosUsuarioSearch.identifier,
            identifier_friend: userLog.identifier,
            nome: userLog.nome,
            email: userLog.email,
            img: userLog.img,
        }

        )

    }

    const handleSelectUser = (userSelect) => {
        socket.emit('buscarHistorico', { identifier: userLog.identifier, identifier_friend: userSelect.identifier })
        setUserSelected(userSelect)
        setChatHistory([]);
        setChat(true)
        setMessageWelcome(false)
        setActiveLi(userSelect.length)
    }

    const handleMensagem = () => {
        if (mensagemText.trim('') === '') {
        } else {
            setMensagemText('')
            socket.emit('mensagem', ({ userLog, mensagemText, userSelected }))
        }
    }

    function formatarMensagemParaRenderizar(mensagem) {
        return {
            remetente: mensagem.remetente,
            nome: mensagem.nome,
            img: mensagem.img,
            message: mensagem.message,
            hora: mensagem.hora,
        };
    }

    const activeProfile = () => {
        if(!profileConfig){
            setProfileConfig(!profileConfig)
        }else{
            setProfileConfig(!profileConfig)
        }
    }

    return {
        handleSearch,
        value,
        setValue,
        resultsSearch,
        results,
        mensagem,
        handleAdicioanar,
        listaUsuarios,
        lista,
        notification,
        mensagemNotification,
        mensagemText,
        setMensagemText,
        handleMensagem,
        handleSelectUser,
        userSelected,
        chat,
        chatHistory,
        messageWelcome,
        activeProfile,
        profileConfig,
        activeLi,
    }

}
export default UseEvents;