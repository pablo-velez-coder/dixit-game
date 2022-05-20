import { useState } from 'react';
import styles from './styles.module.scss';

interface JIJI {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export const RiddlePlay = ({setSubmitted}:JIJI) => {

    const [riddleText, setRiddleText] = useState<string>('');
    const [selectedCard, setselectedCard] = useState<number | undefined>(undefined);

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        console.log(riddleText)
        setSubmitted(true)
    }

    const reset = () =>{
      setRiddleText('')
      setselectedCard(undefined)
    }

  return <div className={styles.RiddlePlay}>
      <section
      className={styles.RiddlePlayHeader}
      >You are the riddler!</section>
             <p>
       Choose your card and make a riddle!
       </p>
    <section className={styles.RiddlePlayCards}>
{[1,2,3,4,5].map((item)=>(
  <div 
  key={item}
  onClick={() => setselectedCard(item)}
  className={`${styles.RiddlePlayCardsCard} ${selectedCard === item && styles.selected}`}>
    <img alt='a' src={`/img/card_0000${item}.jpg`} />
  </div>
))    }

    </section>
    <section className={styles.RiddlePlayForm}>

        <form className={styles.RiddlePlayFormForm} onSubmit={handleSubmit}>
          <h3>Make a riddle</h3>
            <textarea

            value={riddleText}
            onChange={e=> setRiddleText(e.target.value)}
            />
            <button
            disabled={!selectedCard || !riddleText}
            >Ready to go</button>
        </form>
    </section>
<section className={styles.RiddlePlayReset}>
<button onClick={reset}>
  Discard
</button>
</section>
  </div>;
};