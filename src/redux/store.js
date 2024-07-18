import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, userReducer } from './slice'

// create store

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});

export default store;