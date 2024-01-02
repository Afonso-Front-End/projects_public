import { useEffect, useRef, useState } from "react";
import imgSearch from '../assets/icons/search.svg'
import iconGithub from '../assets/icons/github.svg'
import iconPerson from '../assets/icons/person.svg'
import UseEvents from "../js/Events";
import DataToken from "../js/Token";
export default function Chat() {

   
    const messagesRef = useRef();

    const { userLog } = DataToken()
    const
        {
            chat, handleAdicioanar, handleMensagem, handleSearch, handleSelectUser,
            lista, listaUsuarios, mensagem, mensagemNotification, mensagemText,
            notification, results, resultsSearch, setMensagemText,
            setValue, userSelected, value, chatHistory, messageWelcome,
            activeProfile, profileConfig,activeLi
        } = UseEvents()


    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className='content'>
            <div className='left'>
                <div className="profile">
                    <div className="profile-data">
                        <div className="profile_img">
                            <img src={userLog.img} alt="Imagem" onClick={activeProfile} />
                        </div>
                        <div className="profile_data">
                            <p>{userLog.nome}</p>
                            <p>{userLog.email}</p>
                        </div>
                    </div>

                    {profileConfig && (
                        <div className="profile-config">
                            <div>
                                <button onClick={activeProfile} > <img src={iconPerson} alt="icon-profile" /> Perfil<span></span></button>
                                <div className="profile-cofig-data">
                                    <div className="profile_config_img">
                                        <img src={userLog.img} alt="Imagem" />
                                    </div>
                                    <div className="profile_config_info">
                                        <p><span>Nome</span> {userLog.nome}</p>
                                        <p><span>E-mail</span> {userLog.email}</p>
                                        <p>{userLog.identifier}</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    )}
                </div>
                <div className="ToAdd">

                    <div className="search">
                        <input type="text" placeholder="Pesquisar" value={value} onChange={(e) => setValue(e.target.value)} />
                        <button onClick={handleSearch}><img src={imgSearch} alt="img_search" /></button>
                    </div>

                    {results && (
                        <div className="results" onClick={() => handleAdicioanar(resultsSearch)}>
                            <div>

                                <div className="results_img">
                                    <img src={resultsSearch.img} alt="Imagem" />
                                </div>
                                <div className="results_data">
                                    <p>{resultsSearch.nome}</p>
                                    <p>{resultsSearch.identifier}</p>
                                </div>
                            </div>

                        </div>

                    )}
                    {mensagem && (
                        <div className='notice'>
                            <p>{mensagem}</p>
                        </div>
                    )}

                </div>
                <div className="ListUsers">
                    {lista && (
                        <ul>
                            {listaUsuarios && listaUsuarios.map((usuario, index) => (
                                <li key={index} className={`ListUsers_Lista ${userSelected.identifier === usuario.identifier ? 'active-li' : ''}`} onClick={() => handleSelectUser(usuario)}>
                                    <div className="ListUsers_img">
                                        <img src={usuario.url_imagem} alt="Imagem" />
                                    </div>
                                    <div className="ListUsers_data">
                                        <p>{usuario.nome}</p>
                                        <p>{usuario.email}</p>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className='rigth'>
                <div className={`notification ${notification ? 'active-notification' : ''}`}>
                    {notification && (
                        <div className="mensagem-notification">
                            <div className="tags_msg">
                                <p>Notificacao!</p>
                                <p>{mensagemNotification.mensagem.nome} Adicionou voce!</p>
                            </div>
                            <div className="profile_notification">
                                <div className="profile_notification_img">
                                    <img src={mensagemNotification.mensagem.img} alt="Imagem" />
                                </div>
                                <div className="profile_notification_data">
                                    <p>{mensagemNotification.mensagem.nome}</p>
                                    <p>{mensagemNotification.mensagem.identifier}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="container_chat">
                    {chat && (
                        <div className="content_chat">
                            <div className='ListUsers_Lista'>
                                <div className="ListUsers_img">
                                    <img src={userSelected.url_imagem} alt="Imagem" />
                                </div>
                                <div className="ListUsers_data">
                                    <p>{userSelected.nome}</p>
                                    <p>{userSelected.email}</p>
                                </div>
                            </div>
                            <ul id="messages" ref={messagesRef}>
                                {chatHistory && chatHistory.map((message, index) => (
                                    <li key={index} className="message">
                                        <div className="message_img">
                                            <img src={message.img} alt="Imagem" />
                                        </div>
                                        <div className="data-info">
                                            <div className="info">
                                                <p>{message.nome}</p>
                                                <p>{new Date(message.hora).toLocaleString()}</p>
                                            </div>
                                            <span>{message.message}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <form id="form" onSubmit={(e) => { e.preventDefault(); }}>
                                <input id="input" autoComplete='off' value={mensagemText} onChange={(e) => setMensagemText(e.target.value)} />
                                <button onClick={handleMensagem}>Send</button>
                            </form>
                        </div>
                    )}
                </div>

                {messageWelcome && (
                    <div className="boas_vindas">
                        <div className="coll">
                            <div className="coll-boas_vindas">
                                <span></span>
                                <h1>Welcome</h1>
                                <p>my friend</p>
                            </div>
                        </div>
                        <button id="btn-link-github"><img src={iconGithub} alt="" /><a href="https://github.com/Afonso-Front-End" target="_blank">Desenvolver</a></button>
                    </div>
                )}
            </div>
        </div>
    )
}