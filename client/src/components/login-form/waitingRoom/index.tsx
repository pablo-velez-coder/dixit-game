import { notification } from "antd";
import { useSocket } from "hooks/useSocket";
import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "state/redux";
import { getQuery } from "utils/getQuery";

export const WaitingRoom = () => {

  const user = useSelector((state : RootState )=> state.user);
  const socket =  useSocket()
  const {search} = useLocation()
  const {session, name} = getQuery(search)
  const [roomData, setRoomData] = useState<any>({});
  const dispatch = useDispatch()

  useEffect(() => {
    socket?.emit('requestRoomData',session)
      socket?.on('roomData',(data:any)=>{
        /* setRoomData(room) */
        console.log(data)
    })
  }, [socket, session]);  
console.log(roomData)
  return <div >
    Welcome {name} to game session {session}!
    <div>
{/*       {
        roomData?.players.map((user:string, i:number)=>(
          <p key={i}>{i+1}. {user}</p>
        ))
      } */}
    </div>
Let's wait till we are {roomData?.maxPlayers}
  </div>;
};