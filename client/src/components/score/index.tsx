import styles from './styles.module.scss';

export const Score = () => {

    const array = Array.from(Array(30).keys())
    const players = [
        {id:1, name:'Pablo', score:20, color: 'green'},
        {id:2, name:'Pedro', score:30, color: 'red'},
        {id:3, name:'Lazo', score:5, color: 'yellow'},
        {id:4, name:'Yuliño', score:18, color: 'blue'},
    ];

    const firstPlace = ()=>{
        let first = [players[0].name, players[0].score]
        for(let player of players){
            if(first[1]< player.score){
                first = [player.name, player.score]
            }
        }
        return first[0]
    }

  return <div className={styles.Score}>
   <section className={styles.ScoreHeader}>
       <p>Round: 11</p>
       <p>First: {firstPlace()}</p>
   </section>
  {players.map(player=>(
    <section key={player.id} className={styles.ScoreLine}>
       <div>
           {player.name}
       </div>
       <div
       style={{
    borderBottom: `4px solid ${player.color}`,borderRadius:'20%'
    }}
       className={styles.ScoreLineRabbit}>
          {
          array.map(point =>(
              <div 
              
              className={styles.ScoreLineRabbitPoint} key={point}>
              {point ===player.score  &&  <div className={styles.ScoreLineRabbitPointCurrent}>🐇</div>}
              </div>
          ))
          }
       </div>
       <div className={styles.ScoreLineScore}>
           {player.score}
           <span>+3</span>
       </div>
   </section>
  )) }
  </div>;
};