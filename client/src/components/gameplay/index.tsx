import { PlayerNav } from 'components/playersNav';
import styles from './styles.module.scss';

export const GamePlay = () => {
  return <div className={styles.gamePlay}>
<PlayerNav />

  <div  className={styles.gamePlayCards}>
    <img alt='a' src='/img/card_00001.jpg' />
    <img alt='a' src='/img/card_00001.jpg' />
    <img alt='a' src='/img/card_00001.jpg' />
    <img alt='a' src='/img/card_00001.jpg' />
    <img alt='a' src='/img/card_00001.jpg' />

  </div>
  <div>
  <p>Guess the riddle card !</p>
  </div>
  </div>;
  
};