import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  filter: '',
  isLoading: true,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload);
      state.items.splice(index, 1);
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export const persisteContactReducer = contactsSlice.reducer;
