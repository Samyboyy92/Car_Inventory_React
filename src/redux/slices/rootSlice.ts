import { createSlice } from '@reduxjs/toolkit';

export interface CarState {
    name: string,
    make: string,
    model: string,
    color: string,
    year: number,
    price: number,
    max_speed: string,
    description: string,    
}

const initialState: CarState = {
    name: '',
    make: '',
    model: '',
    color: '',
    year: 0,
    price: 0,
    max_speed: '',
    description: '',
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action ) => {state.name = action.payload},
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseSpeed: (state, action) => { state.max_speed = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload } 
    }
})

export const reducer = rootSlice.reducer;
export const {
    chooseName,
    chooseMake,
    chooseModel,
    chooseColor,
    chooseYear,
    choosePrice,
    chooseSpeed,
    chooseDescription,
} = rootSlice.actions;