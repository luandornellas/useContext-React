import { createContext, useState } from "react";

export const Context = createContext({})

export default function Dados({children}){
    const [user, setUser] = useState("luan")
    
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}