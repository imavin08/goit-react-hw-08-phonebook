import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations/operations';
import css from './ContactsItem.module.css';
import { LoaderDelete } from 'components/Loader';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { useEffect } from 'react';

export const ContactsItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    return () => {
      if (isLoading === id) {
        Notiflix.Notify.failure(
          `You have removed ${name} contact from your list`
        );
      }
    };
  }, [id, isLoading, name]);

  return (
    <li className={css.item}>
      {name}: {phone},
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
        {isLoading === id && <LoaderDelete />}
      </button>
    </li>
  );
};
