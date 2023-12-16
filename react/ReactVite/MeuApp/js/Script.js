import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function useScript() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newSocket = io("http://localhost:4000");
        setSocket(newSocket);
        newSocket.on("message", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        const input = document.getElementById("input");
        const message = input.value;

        if (input.value === '') {
            return false
        }
        if (socket) {
            socket.emit("sendMessage", message);
            input.value = "";
            return true
        }

    };
    return{
        messages,
        sendMessage
    }
}