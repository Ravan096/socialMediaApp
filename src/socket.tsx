import io from 'socket.io-client';
import { useMemo, createContext, useContext, ReactNode } from 'react';

const SocketContext = createContext<ReturnType<typeof io> | null>(null);
const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }: { children: ReactNode }) => {
    const token = localStorage.getItem('token');
    const socket = useMemo(() => io("https://social-media-mitra-junction.vercel.app/api/v1", {
        extraHeaders: {
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true
    }), []);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, getSocket }