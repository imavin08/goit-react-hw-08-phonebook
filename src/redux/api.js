import axios from 'axios';

axios.defaults.baseURL = 'https://62f405cea84d8c9681315ae7.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
}

export async function addContact({ name, phone: number }) {
  const { data } = await axios.post(`/contacts/`, {
    name,
    phone: number,
  });
  return data;
}
