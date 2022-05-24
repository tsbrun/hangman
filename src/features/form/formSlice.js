import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    hasErrors: false,
    message: ""
}

export const formSlice = createSlice({
    name: 'form', 
    initialState,
    reducers: {
        // loading - dispatch before post request
        postData: state => {
            state.message = "Sending data..."
            state.loading = true
        },
        // success - dispatch upon confirmation of success
        postDataSuccess: state => {
            state.message = "Level successfully submitted."
            state.loading = false
            state.hasErrors = false
        },
        // failure - dispatch upon receiving error
        postDataFailure: state => {
            state.message = "Something went wrong."
            state.loading = false
            state.hasErrors = true
        }
    }
})

// generate actions 
export const { postData, postDataSuccess, postDataFailure } = formSlice.actions

// create selector that returns portion of state relevant to the form
export const formSelector = state => state.form

// export reducer
export default formSlice.reducer

// thunk - 1. dispatch loading, 2. post data, 3. conditionally dispatch success or failure
// make sure thunk accepts argument that will be form data 
export function submitLevel(formData) {
    return async dispatch => {
        dispatch(postData())

        try {
            const response = await fetch("http://localhost:3001/levels", {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(formData)
            })
            
            if (response.status === 200) {
                dispatch(postDataSuccess())
            } 
        } catch (error) {
            dispatch(postDataFailure())
        }
    }
}