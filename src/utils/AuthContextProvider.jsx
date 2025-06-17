import {AuthContext} from "./AuthContext"
import {useState} from "react"

function AuthContextProvider({children}){
    const [user, setUser] = useState("")
    return(
        <AuthContext.Provider value = {{user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider










