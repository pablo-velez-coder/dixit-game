import { useSelector } from 'react-redux';
import { RootState } from 'state/redux';
import {Drawer} from 'antd'
import styles from './styles.module.scss';
import { useState } from 'react';
import { Score } from 'components/score';

export const Header = () => {

  const user = useSelector((state : RootState )=> state.user);
  const [openScore, setOpenScore] = useState<boolean>(false);
  return<>
  <div className={styles.Header}>
   <p> {user.name}</p>
   <button onClick={() => setOpenScore(true)}>See score</button>

    <Drawer
  bodyStyle={{padding:0, backgroundColor:'orange'}}
    title="Score"
     placement="bottom"
      onClose={()=>setOpenScore(false)} visible={openScore}>
         <Score />
       </Drawer>
  </div>
  </>;
};