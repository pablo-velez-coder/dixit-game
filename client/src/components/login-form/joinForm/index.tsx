import { useSocket } from "hooks/useSocket";
import {  notification } from 'antd';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const JoinForm = () => {
  const [sessionText, setSessionText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState<string>('');
  const navigate = useNavigate()
  const socket = useSocket()

  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    socket?.emit('join',{name,room: Number(sessionText)})
    socket?.on('message',({text, room}:{text:string, room:any})=> {
      notification.open({
        message: text,
      });
    })
/*     socket?.on('roomData',(data:any)=>{
      console.log(data)
  }) */
    navigate(`/waiting?${sessionText}&${name}`)
  }

      useEffect(() => {
        inputRef?.current?.focus()
      }, []);
    
  return <form onSubmit={handleSubmit}>
    <p>Join game:</p>
        <input
        value={sessionText}
        onChange={e=> setSessionText(e.target.value)}
        placeholder="Paste code here..." />
              <div>Choose your username</div>
      <input
      ref={inputRef}
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
        <button type="submit">Join</button>
    </form>
};