import { useSelector } from 'react-redux';
import './App.css';
import { LoginForm } from 'components/login-form';
import { GameBoard } from 'pages/game-board';
import { RootState } from 'state/redux';
import { useEffect } from 'react';
import { LoadingPage } from 'components/loading';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from 'state/redux/users/userSlice';
import { useSocket } from 'hooks/useSocket';

const App = () => {
  const user = useSelector((state : RootState )=> state.user);
  const dispatch   = useDispatch()
  const isReadyToBegin = user.allPlayers.length === user.playersQuantity

  const socket = useSocket()

  useEffect(() => {
      socket?.emit('custom_event',{name:'Alex', age:25})
  }, [socket]);
  
  useEffect(() => {
    isReadyToBegin && dispatch(startLoading())
    const interval = setTimeout(() => {
      dispatch(stopLoading())
    }, 2000);
    return () =>{
      clearInterval(interval)
    }
  }, [isReadyToBegin, dispatch]);

  return (
    <div className="App">
      {user.loading ? <LoadingPage /> : (
isReadyToBegin  ? <GameBoard /> : <LoginForm />
      )}
    </div>
  );
}

export default App;
