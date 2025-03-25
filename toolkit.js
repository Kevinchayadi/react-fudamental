import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const additem = createAction('ADD_ITEM')

const cartreducer = createReducer([],(builder)=>{
    builder.addCase(additem, (state, action) => {
        state.push(action.payload)
    });
});
const login = createAction('ADD_Session')

const loginReducer = createReducer({status:false},(builder)=>{
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer:{
        cart:cartreducer,
        login:loginReducer,
    }
});

store.subscribe(()=>{
    console.log("STORE CHANGES: ", store.getState());
})


store.dispatch(additem({id:1, qty:20}));
store.dispatch(login());