import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from 'redux/api';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const contact = await api.register({ name, email, password });
      token.setToken(contact.token);
      return contact;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const contact = await api.logIn({ email, password });
      token.setToken(contact.token);
      return contact;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await api.logOut();
    token.unsetToken();
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchUserFromServer = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.setToken(persistToken);
    try {
      const data = await api.fetchCurrentUser();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
