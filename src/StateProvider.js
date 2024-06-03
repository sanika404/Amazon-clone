import React,{createContext,useContext,useReducer} from "react";

//Preapres the data layer
export const StateContext = createContext();
//wrap our app an dprovide the data  laye r
export const StateProvider = ({reducer,initialState,children})=>(

    <StateContext.Provider 
    value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
// pull informatoin from the data layer
export const useStateValue =()=>useContext(StateContext);