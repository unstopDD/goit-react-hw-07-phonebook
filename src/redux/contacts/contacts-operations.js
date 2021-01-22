import * as contactsAPI from 'services/fetchContacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await contactsAPI.fetchContacts();
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await contactsAPI.addContact(contact);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deletContact',
  async contactID => {
    try {
      await contactsAPI.removeContact(contactID);
      return contactID;
    } catch (error) {
      console.log(error);
    }
  },
);

// import * as contactsActions from './contacts-actions';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message));
//   }
// };

// export const addContact = contact => async dispatch => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const contacts = await contactsAPI.addContact(contact);
//     dispatch(contactsActions.addContactSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error.message));
//   }
// };

// export const deleteContact = contactID => async dispatch => {
//   dispatch(contactsActions.deletContactRequest());

//   try {
//     await contactsAPI.removeContact(contactID);
//     dispatch(contactsActions.deletContactSuccess(contactID));
//   } catch (error) {
//     dispatch(contactsActions.deletContactError(error.message));
//   }
// };
