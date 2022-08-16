import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect } from 'react';
import { ContactsItem } from './ContactsItem/item';
import { Loader } from 'components/Loader';

const ContactsList = () => {
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
    <>
      <ul>
        {contacts.length > 0
          ? searchName().map(({ name, id, phone }) => (
              <ContactsItem name={name} key={id} id={id} phone={phone} />
            ))
          : !isLoading && <p>You dont have contacts</p>}
        {isLoading === 'fetch' && <Loader />}
      </ul>
    </>
  );
};

export default ContactsList;
