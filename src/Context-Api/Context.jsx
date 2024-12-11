// create a context provider function here

import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

// create a provider funnction

const UserProvider = ({children}) =>{
    const[user,setUser] = useState("Adithya");
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider