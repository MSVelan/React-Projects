import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    );
};
 
//Pull info from datalayer
// eslint-disable-next-line react-refresh/only-export-components
export const useStateValue= ()=>useContext(StateContext);