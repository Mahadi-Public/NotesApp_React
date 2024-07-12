import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts : []
}

const contactSlicer = createSlice({
    name : "Contact",
    initialState,
    reducers : {
        addContact : (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        }
    }
})

export const {addContact} = contactSlicer.actions;
export default contactSlicer.reducer;
