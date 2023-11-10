import { createSlice } from '@reduxjs/toolkit';

import { deleteContact,addContact,fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


export const contactsSlice = createSlice({
	name: 'contacts',
	initialState:  {
		contactList: [],
	    isLoading: false,
        error: null,
},

 extraReducers: {
    [fetchContacts.pending]:(state) =>{ state.isLoading = true},
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contactList.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

  },
});




export const contactsReducer = contactsSlice.reducer;