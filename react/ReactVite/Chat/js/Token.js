import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'


export default function DataToken() {
    const [userLog, setUserLog] = useState([]);
    const [token, setToken] = useState(null);
    useEffect(() => {
        const decodeToken = (token) => {
            try {
                if (typeof token === "string") {
                    const decoded = jwtDecode(token);
                    return decoded;
                } else {
                    return null;
                }
            } catch (error) {
                return null;
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        const tokenFromURL = urlParams.get('token');

        if (tokenFromURL) {
            localStorage.setItem("token", tokenFromURL);

            const token = localStorage.getItem("token");
    
            const tokenDecodificado = decodeToken(token);
    
            setUserLog({
                nome: tokenDecodificado.nome,
                email: tokenDecodificado.email,
                identifier: tokenDecodificado.identifier,
                img: tokenDecodificado.url_imagem,
            });
            setToken(token);
        }else{
            console.log('Nenhum token ')
        }


    }, []);

    return {
        token,
        userLog,
    }
};
