import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'redux/operations/operations';
import { filter, setIsLoading } from '../actions/contactsActions';

export const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload.toLowerCase(),
});

export const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => 'fetch',
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [deleteContact.pending]: (a, b) => {
    return b.meta.arg;
  },
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  [addContact.pending]: () => 'add',
  [addContact.fulfilled]: () => 'addSuccess',
  [addContact.rejected]: () => false,

  [setIsLoading]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,

  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});
