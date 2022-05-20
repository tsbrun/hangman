import { createSlice } from "@reduxjs/toolkit"; // createAsyncThunk

const initialState = {
    loading: false,
    hasErrors: false,
    levels: []
}

export const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        getLevels: state => {
            state.loading = true
        },
        getLevelsSuccess: (state, { payload }) => {
            state.levels = payload 
            state.loading = false 
            state.hasErrors = false 
        },
        getLevelsFailure: state => {
            state.loading = false
            state.hasErrors = true 
        }
    }
})

// Action creators generated for each case reducer function
export const { getLevels, getLevelsSuccess, getLevelsFailure } = levelsSlice.actions

export const levelsSelector = state => state.levels

export default levelsSlice.reducer

// Asynchronous thunk action
export function fetchLevels() {
    return async dispatch => {
        dispatch(getLevels())

        try {
            const response = await fetch("http://localhost:3001/levels")
            const json = await response.json()
            const data = json.levels 

            dispatch(getLevelsSuccess(data))
        } catch (error) {
            dispatch(getLevelsFailure())
        }
    }
}