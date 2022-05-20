import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const formSlice = createSlice({
    name: 'form', 
    initialState,
    reducers: {
        // loading - dispatch before post request
        // success - dispatch upon confirmation of success
        // failure - dispatch upon receiving error
    }
})

// generate actions 

// create selector(s)

export default formSlice.reducer

// do we need thunks?