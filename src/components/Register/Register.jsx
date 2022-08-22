import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations/auth/authOperations';
import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        return setName(value);

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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.registerForm} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          placeholder="Name"
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>

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
        Create account
      </Button>
    </form>
  );
}
