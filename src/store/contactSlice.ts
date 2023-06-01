import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Contact } from "../contact";

interface ContactSliceState {
  contactList: Contact[];
  contactDetail: Contact | unknown;
  isSidebarOpen: boolean;
}

const contactDetailsListJSON = localStorage.getItem("contactDetailsList");
const contactDetailsList = contactDetailsListJSON
  ? JSON.parse(contactDetailsListJSON)
  : [];

const initialState: ContactSliceState = {
  contactList: contactDetailsList ? contactDetailsList : [],
  contactDetail: null,
  isSidebarOpen: true,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    allConatctListDetails: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
      localStorage.setItem(
        "contactDetailsList",
        JSON.stringify(state.contactList)
      );
    },
    deleteContact: (state, action: string | any) => {
      state.contactList = state.contactList.filter(
        (contact: Contact) => contact.id !== action.payload
      );
      localStorage.setItem(
        "contactDetailsList",
        JSON.stringify(state.contactList)
      );
    },
    singleContactDetails: (state, action: string | any) => {
      state.contactDetail = state.contactList.filter(
        (contact: Contact) => contact.id === action.payload
      )[0];
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const updatedContact = action.payload;
      state.contactList = state.contactList.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      localStorage.setItem(
        "contactDetailsList",
        JSON.stringify(state.contactList)
      );
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {
  allConatctListDetails,
  deleteContact,
  singleContactDetails,
  updateContact,
  toggleSidebar,
} = contactSlice.actions;

export default contactSlice.reducer;
