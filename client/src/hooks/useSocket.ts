import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";


export const useSocket = () =>{
    const socket = useRef<Socket<any, any>>()

    useEffect(() => {
      socket.current = io("ws://localhost:8900")
     }, []);

    return socket?.current
}