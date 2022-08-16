import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Form.module.css';
import { addContact } from 'redux/operations/operations';
import { LoaderAdd } from 'components/Loader';
import { setIsLoading } from 'redux/actions/contactsActions';
import { Filter } from '../Filter';

function Form() {
  const [name, SetName] = useState('');
  const [number, SetNumber] = useState('');

  const contactsValue = useSelector(state => state.entities);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    if (isLoading === 'addSuccess') {
      Notiflix.Notify.success(
        `You have added the contact ${name}, to your list`
      );
      SetName('');
      SetNumber('');
      dispatch(setIsLoading());
    }
  }, [dispatch, isLoading, name]);

  const handleInputChange = e => {
    const currentTarget = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (currentTarget === 'name') {
      SetName(value);
    }
    if (currentTarget === 'number') {
      SetNumber(value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const namevalue = contactsValue.map(ar => ar.name.toLowerCase());
    if (namevalue.includes(name.toLowerCase())) {
      Notiflix.Notify.warning(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact({ name, phone: number }));
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <div className={css.formBox}>
        <label className={css.label}>
          Name
          <input
            value={name}
            onChange={handleInputChange}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            value={number}
            onChange={handleInputChange}
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add Contact{isLoading === 'add' && <LoaderAdd />}
        </button>
      </div>
      <Filter />
    </form>
  );
}

export default Form;
