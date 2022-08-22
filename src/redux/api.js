import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`contacts/${id}`);
  return id;
}

export async function addContact({ name, number }) {
  const { data } = await axios.post('contacts', {
    name,
    number,
  });
  return data;
}

export async function register({ name, email, password }) {
  const { data } = await axios.post('users/signup', {
    name,
    email,
    password,
  });
  return data;
}

export async function logIn({ email, password }) {
  const { data } = await axios.post('users/login', {
    email,
    password,
  });
  return data;
}

export async function logOut() {
  const { data } = await axios.post('users/logout');
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await axios.get('users/current');
  return data;
}
