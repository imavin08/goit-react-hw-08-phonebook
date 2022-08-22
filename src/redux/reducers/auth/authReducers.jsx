import { createReducer } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchUserFromServer,
} from 'redux/operations/auth/authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  fethCurrentUser: false,
};

export const authReducer = createReducer(authInitialState, {
  [registerUser.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logInUser.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logOutUser.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
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
