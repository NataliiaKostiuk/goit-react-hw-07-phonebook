import { createSlice } from '@reduxjs/toolkit';
import data from '../../src/data.json/data.json';




export const contactsSlice = createSlice({
	name: 'contacts',
	initialState:  {
	contactList: [...data],
},
	reducers: {
		addContact:
		(state, action) => {
      state.contactList.push(action.payload)
            },
        deleteContact: (state, action) => {
      state.contactList = state.contactList.filter(contact => contact.id !== action.payload);      
        }
	},
});





export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;