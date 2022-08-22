import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect } from 'react';
import { ContactsItem } from './ContactsItem/item';
import { Loader } from 'components/Loader';
import Filter from 'components/Filter';
import css from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(state => state.entities);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const searchName = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsBox}>
      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ul className={css.contactsList}>
          {searchName().map(({ name, id, number }) => (
            <ContactsItem name={name} key={id} id={id} number={number} />
          ))}
          {isLoading === 'fetch' && <Loader />}
        </ul>
      ) : (
        !isLoading && (
          <p className={css.text}>You don't have saved contacts yet</p>
        )
      )}
    </div>
  );
}
