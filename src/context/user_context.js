import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext= createContext()

const UserProvider= ({ children })=>{
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading }= useAuth0();
    const [myUser, setMyUser]= useState(null)

    useEffect(()=>{
        if(isAuthenticated){
            setMyUser(user)
        }
        else{
            setMyUser(false)
        }
    }, [isAuthenticated])

    return (
        <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
            { children }
        </UserContext.Provider>
    )
};
export default UserProvider

export const useUserContext= ()=>{
    return useContext(UserContext)
}