import { CreateSession } from '../createSession';
import { JoinForm } from '../joinForm';
import styles from './styles.module.scss';

export const InitialPage = () => {

   return <section className={styles.loginMain}>
     <CreateSession />
    <p>Or</p>
    <JoinForm />
    </section>
};