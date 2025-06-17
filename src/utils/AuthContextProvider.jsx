import {AuthContext} from "./AuthContext"
import {useState} from "react"

function AuthContextProvider({children}){
    const [userData, setUserData] = useState("")
    return(
        <AuthContext.Provider value = {{userData , setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider










