import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state,action){
            state.push(action.payload);
        }
    }
})

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,

    }
});

store.subscribe(()=>{
    console.log("STORE CHANGES: ", store.getState());
})

store.dispatch(cartSlice.actions.addItem({id:1, qty:20}))