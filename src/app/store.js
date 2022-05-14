import { configureStore } from '@reduxjs/toolkit'
import levelsReducer from '../features/levels/levelsSlice'

export const store = configureStore({
    reducer: {
        levels: levelsReducer,
    },
})