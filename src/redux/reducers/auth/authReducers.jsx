import { createReducer } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchUserFromServer,
} from 'redux/operations/auth/authOperations';
import { setAuthStatus } from 'redux/actions/contactsActions';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  fethCurrentUser: false,
  authStatus: false,
};

export const authReducer = createReducer(authInitialState, {
  [registerUser.pending]: state => {
    state.authStatus = 'RegPending';
  },
  [registerUser.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.authStatus = false;
  },

  [registerUser.rejected]: state => {
    state.authStatus = 'RegError';
  },

  [setAuthStatus]: state => {
    state.authStatus = false;
  },

  // Log in
  [logInUser.pending]: state => {
    state.authStatus = 'LogPending';
  },
  [logInUser.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logInUser.rejected]: state => {
    state.authStatus = 'LogError';
  },

  // Log Out
  [logOutUser.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.authStatus = false;
  },

  // Fetching
  [fetchUserFromServer.pending]: state => {
    state.fethCurrentUser = true;
  },
  [fetchUserFromServer.fulfilled]: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.fethCurrentUser = false;
  },
  [fetchUserFromServer.rejected]: state => {
    state.fethCurrentUser = false;
  },
});
