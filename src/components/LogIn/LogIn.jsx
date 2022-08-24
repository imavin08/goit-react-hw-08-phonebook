import Notiflix from 'notiflix';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Login.module.css';
import { logInUser } from 'redux/operations/auth/authOperations';
import { useEffect } from 'react';

export default function LogIn() {
  const authStatus = useSelector(state => state.auth.authStatus);

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authStatus === 'LogError') {
      Notiflix.Notify.failure('Error: incorrectly entered email or password');
    }
  }, [authStatus]);

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  return (
    <form className={css.loginForm} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Email
        <input
          placeholder="Email"
          className={css.input}
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Password
        <input
          placeholder="Password"
          className={css.input}
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>

      <Button type="submit" variant="primary" className={css.button}>
        Log in
      </Button>
    </form>
  );
}
