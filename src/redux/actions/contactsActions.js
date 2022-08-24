import { createAction } from '@reduxjs/toolkit';

export const filter = createAction('items/filter');
export const setIsLoading = createAction('isLoading/setIsLoading');
export const setAuthStatus = createAction('authStatus/setAuthStatus');
