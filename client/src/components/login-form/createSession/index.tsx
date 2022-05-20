import { CreateModal } from 'components/create-modal';
import { useState } from 'react';
import styles from './styles.module.scss'

export const CreateSession = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return <div className={styles.createSession}>
  <CreateModal
  closeModal={()=>setIsModalVisible(false)}
  isModalVisible={isModalVisible} />
  <button
  onClick={()=> setIsModalVisible(true)}
  >Create new session</button>
  </div>;
};