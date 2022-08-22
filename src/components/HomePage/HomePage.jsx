import { useSelector } from 'react-redux';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <h1 className={css.title}> Notebook 1.0</h1>
          <div className={css.homeBox}>
            <h2 className={css.text}>
              Create an account or log in to start using your Notebook
            </h2>
          </div>
        </>
      ) : (
        <h2>Congratulations you are registered in Noteboock 1.0</h2>
      )}
    </>
  );
}

// : <p>hello</p>
