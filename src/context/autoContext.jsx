import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new erro("No hay proveedor")
    return context
}



export function AuthProvider({ children }) {



    const singup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <authContext.Provider value={{ singup }}>{children} </authContext.Provider>
    )
}











