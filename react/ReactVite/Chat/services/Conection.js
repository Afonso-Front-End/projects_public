import { useEffect } from 'react';
import { socket } from '../socket';
import useJwtToken from '../js/Token';

export default function Conection() {
    const { userLog } = useJwtToken()

    useEffect(() => {
        const onConnect = () => {
            socket.emit('usuario conectado', userLog.identifier );

        };
        
        const onDisconnect = () => {
            socket.emit('usuario desconectado', userLog.identifier );
        };
        
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, [userLog.identifier]);

    return Conection;
}
