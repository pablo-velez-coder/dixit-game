
import { PlayerNav } from 'components/playersNav';
import styles from './styles.module.scss';
export const GuessingPlay = () => {


  return <div className={styles.GuessingPlay}>
      
    <p> Waiting for players...</p>
<PlayerNav />
    <section className={styles.GuessingPlayRiddle}>
      <p>Riddler: Pepe</p>
      <h1>"Give me your hand"</h1>
    </section>
    <p>Choose your playing card!</p>
    <section className={styles.GuessingPlayCards}>
   <img alt='a' src='/img/card_00001.jpg' />
    <img alt='a' src='/img/card_00002.jpg' />
    <img alt='a' src='/img/card_00003.jpg' />
    <img alt='a' src='/img/card_00007.jpg' />
    <img alt='a' src='/img/card_00008.jpg' />
    <img alt='a' src='/img/card_00009.jpg' />
    </section>
  </div>;
};