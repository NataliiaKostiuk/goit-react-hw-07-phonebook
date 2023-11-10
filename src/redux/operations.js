import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

 axios.defaults.baseURL = 'https://654be7505b38a59f28efe0b1.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
	async (_, thunkAPI) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});


export const addContact = createAsyncThunk(
	'contacts/fetchPost',
	async ({ name, number }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { name, number });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk('tasks/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/contacts/${id}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});