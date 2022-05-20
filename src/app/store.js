import { configureStore } from '@reduxjs/toolkit'
import levelsReducer from '../features/levels/levelsSlice'
// import formReducer from '../features/form/formSlice'

export const store = configureStore({
    reducer: {
        levels: levelsReducer,
        // form: formReducer,
    },
})