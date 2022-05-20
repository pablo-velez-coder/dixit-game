import { Spinner } from 'components/common/spinner';
import styles from './styles.module.scss';

export const LoadingPage = () => {
  return <div className={styles.LoadingPage}>

    <section>
  <h2>  Mixing players and
    Choosing a the first riddler to start...</h2>
    </section>
    <section className={styles.LoadingPageCard}>
    <img alt='a' src='/img/card_00001.jpg' />
    <Spinner />
    </section>

  </div>;
};