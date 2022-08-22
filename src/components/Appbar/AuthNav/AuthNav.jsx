import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authBox}>
      <NavLink className={css.link} to="/register">
        <Button variant="dark">Create account</Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button variant="success"> Log In</Button>
      </NavLink>
    </div>
  );
}
