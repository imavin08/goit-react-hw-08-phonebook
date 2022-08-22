import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations/auth/authOperations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={css.userMenuBox}>
      <p className={css.userEmail}>{email}</p>
      <Button variant="info" onClick={() => dispatch(logOutUser())}>
        Log Out
      </Button>
    </div>
  );
}
