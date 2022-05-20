import { useState } from 'react';
import styles from './styles.module.scss';

type Card = { image: string; name: string}

export const RiddlerVoting = ({image, riddle}:{image:string; riddle:string}) => {

    const [othersCards, setOthersCards] = useState<Card[]>([
        { image: '', name: 'Carlos'   },
        { image: '/img/card_00007.jpg', name: 'Marve'   },
        { image: '', name: 'Mariana'   },
        ]);

  return <div className={styles.RiddlerVoting}>
     <section  className={styles.RiddlerVotingRiddle}>
     <img src={image} alt='sad' />
      <h2>{riddle}</h2>
     </section>
     <section className={styles.RiddlerVotingOthersCards}>
        {
            othersCards.map((card: Card)=>(
                <div className={styles.RiddlerVotingOthersCardsSpace}>
            
                <div className={styles.RiddlerVotingOthersCardsVoters}>
                    <>
                    <div className={styles.RiddlerVotingOthersCardsVotersVoter}  />
                    pablo
                    </>
                    <>
                    <div className={styles.RiddlerVotingOthersCardsVotersVoter}  />
                    marolyn
                    </>
                    <div className={styles.RiddlerVotingOthersCardsVotersVoter}  />
                </div>
                <div>
                    <div className={styles.RiddlerVotingOthersCardsCard}>
                {card.image &&    <img src={card.image} alt='dassa' />}
                    </div>
                    <p>
                        {card.name}
                    </p>
                </div>
                </div>
            ))
        }
     </section>
     <section>
         Players are selecting their cards based on the riddle...
     </section>
     <section>
         They are voting!
     </section>
  </div>;
};