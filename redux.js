import { createStore, legacy_createStore } from "redux";

//reducer
const cartreducer = (
    state = {
        cart : [{id:1, qty:1}],
    },
    action
) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state, cart: [...state.cart, action.payload]
            };

        default:
            return state;

    }
    }


//store
const store = legacy_createStore(cartreducer);
console.log("oncreated Store: ", store.getState());


//subscribe
store.subscribe(()=>{
    console.log("STORE CHANGES: ", store.getState());
})

//dispatch
const action1 = {type: 'ADD_ITEM', payload: {id:2, qty:2}};
store.dispatch(action1);