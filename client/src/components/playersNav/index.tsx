import { Badge } from 'components/badge';
import { useState } from 'react';
import styles from './styles.module.scss';

interface Player {name:string; hasPlayed:boolean}

export const PlayerNav = () => {


  const [players] = useState<Player[]>([
    {name:'pablo', hasPlayed: true},
    {name:'pedro', hasPlayed: false},
    {name:'yuliño', hasPlayed: true},
    {name:'edito', hasPlayed: true},
    {name:'lazo', hasPlayed: false},
    {name:'leyci', hasPlayed: false},
  ]);

  return <section className={styles.GuessingPlayPlayers}>
      {players.map((player:Player,id:number)=>(
        <div key={id}>
          <div className={styles.GuessingPlayPlayersAvatar} >
       {player.hasPlayed && <Badge />}
          </div>
          {player.name}
        </div>
      ))
      }
    </section>;
};