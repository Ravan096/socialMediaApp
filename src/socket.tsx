import io, { Socket } from 'socket.io-client';
import React, { useEffect, useMemo, useState, createContext, useContext, ReactNode } from 'react';

const SocketContext = createContext<Socket | null>(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const newSocket = io("https://social-media-mitra-junction.vercel.app", {
      transports: ["websocket"], // use websocket directly
      extraHeaders: {
        Authorization: `Bearer ${token || ''}`
      },
      withCredentials: true
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  if (!socket) return null;

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
