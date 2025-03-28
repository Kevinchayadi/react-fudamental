import { createContext, useContext, useReducer } from "react";

const TotalPriceContex = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state , action) => {
    switch (action.type) {
        case "UPDATE":{
            return{
                total: action.payload.total,
            }
        }
        default:{
            throw Error ("Unknow action : " + action.type)
        }
    }
}

export function TotalPriceProvider({children}){
    const [totalPrice, dispatch] = useReducer(
        totalPriceReducer, {
            total:0
        }
    )

    return (
        <TotalPriceContex.Provider value={totalPrice}>
             <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
             </TotalPriceDispatchContext.Provider>
        </TotalPriceContex.Provider>
    )
}

export function useTotalPrice(){
    return useContext(TotalPriceContex)
}

export function useTotalPriceDispatch(){
    return useContext(TotalPriceDispatchContext)
}