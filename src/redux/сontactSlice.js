import { createSlice } from '@reduxjs/toolkit';


export const contactsSlice = createSlice ({

    name: 'contacts',
    initialState: {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',

  }, reducers: {
      
      addContact(state, action) {
      state.contacts.push(action.payload);
      
      },
       deleteContacts(state, action) {
      state.contacts.splice(action.payload, 1);
      },
    //  deleteContacts(state, action) {
    //   const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
    //   state.contacts.splice(index, 1);
    // },
      filterContacts(state, action) {
      state.filter = action.payload;
      },
      
  },
    
});

// Генератори экшенов

export const { addContact, deleteContacts, filterContacts } = contactsSlice.actions;

// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;