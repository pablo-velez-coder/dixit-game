
/* import { removeUser } from "../../state/redux/users/userSlice"; */
import { Chat } from 'components/chat';
import { Congratulations } from 'components/congratulations';
import { GamePlay } from 'components/gameplay';
import { GuessingPlay } from 'components/guessingPlay';
//import { GamePlay } from 'components/gameplay';
import { Header } from 'components/header';
import { LoadingPage } from 'components/loading';
import { RiddlePlay } from 'components/riddlePlay';
import { RiddlerVoting } from 'components/riddlerVoting';
import { Score } from 'components/score';
import { useState } from 'react';
import styles from './styles.module.scss'

export const GameBoard = () => {

const [submitted, setSubmitted] = useState<boolean>(false);
  return <div className={styles.gameBoard}>
    <Header />
    <div className={styles.gameBoardMain}>
<Chat />
<div className={styles.gameBoardMainRight}>
{submitted ? <RiddlerVoting image={'/img/card_00004.jpg'} riddle='The mind is all' /> :<RiddlePlay setSubmitted={setSubmitted} />}
</div>
{/*     <GamePlay /> */}
{/* <LoadingPage /> */}

{/*  <Congratulations /> */}
{/* <Score /> */}
{/*   <GuessingPlay /> */}
    </div>
{/*    <button
   onClick={()=> dispatch(removeUser())}
   >Log out</button> */}
  </div>;
};