import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'


export default function useJwtToken() {
    const [TOKENDECODIFICADO, setTOKENDECODIFICADO] = useState([]);
    const [TOKEN, setTOKEN] = useState(null)

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
        }

        const token = localStorage.getItem("token");

        const tokenDecodificado = decodeToken(token);

        setTOKENDECODIFICADO(tokenDecodificado);
        setTOKEN(token)
        console.log(token)
        
    }, []);

    return {
        TOKENDECODIFICADO,
        TOKEN,
    }
};


