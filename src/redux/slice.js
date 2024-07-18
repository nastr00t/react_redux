import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({

    name: 'counter',
    initialState: 0,
    reducers: {
        //definir el reducer para incrementar el contador
        increment: state => state + 1,
        // definir reducer para decrementar
        decrement: state => state - 1
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: { name: '' },
    reducers: {
        setName: (state, action) => {
            return { ...state, name: action.payload }
        }
    }
});

// Exportar las acciones de los slices
export const { increment, decrement } = counterSlice.reducers;
export const { setName } = userSlice.reducers;



//Exportar los reducers

export const counterReducer = counterSlice.reducer;
export const userReducer = userSlice.reducer;