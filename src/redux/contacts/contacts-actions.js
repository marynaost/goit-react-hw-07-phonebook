import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContacts = createAction('contacts/delete');

const changeFilter = createAction('contact/changeFilter');

const actions = { addContact, deleteContacts, changeFilter };

export default actions;
