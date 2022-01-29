import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contacts/contacts-reducer';
import { filterReducer } from './contacts/contacts-reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
