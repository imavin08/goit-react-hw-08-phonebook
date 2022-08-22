import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterReducer, entities, error, isLoading } from './reducers';
import { authReducer } from './reducers/auth/authReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    filter: filterReducer,
    entities,
    error,
    isLoading,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
