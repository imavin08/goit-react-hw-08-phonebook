import ContactsList from './ContactsList';
import Form from './Form';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <h1 className={css.title}>Phoneboock</h1>
        <Form />
      </div>
      <div className={css.contactsBox}>
        <h2 className={css.titleContacts}>Contacts</h2>
        <ContactsList />
      </div>
    </div>
  );
}

export default App;
