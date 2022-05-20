import { Modal, notification } from 'antd';
import { useSocket } from 'hooks/useSocket';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateModal = ({isModalVisible, closeModal}:{isModalVisible:boolean, closeModal:()=>void}) => {

    const [quantity, setQuantity] = useState<number>(3);
    const socket =  useSocket()
    const navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null)
    const [name, setName] = useState<string>('');

    useEffect(() => {
      inputRef?.current?.focus()
    }, []);
    const handleCreate = () =>{

        const newSessionId = Date.now()
        socket?.emit('join',{name,room: newSessionId, players:quantity || 3})
        socket?.on('message',({text}:{text:string})=> {
          notification.open({
            message: text,
          });
          console.log(text)
        })
        navigate(`/waiting?${newSessionId}&${name}`)
        closeModal()
    }

return <Modal width={300} centered footer={null} visible={isModalVisible} maskClosable onCancel={closeModal} >
    <div >
      Number of players:
    <select
    onChange={e=> setQuantity(Number(e.target.value))}
    >
     {Array.from(Array(7).keys()).slice(3).map(option=>(
       <option key={option} value={option}>
         {option}
       </option>
     ))}
     </select>
      <div>Choose your username</div>
      <input
      ref={inputRef}
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />

    <button
    onClick={handleCreate}
    >Create session</button>
  </div>
  </Modal>;
};