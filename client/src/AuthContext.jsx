import { createContext , useContext , useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({children}){
    
    const[authenticated , setAuthentication] = useState(false);
    const[username, setUsername] = useState('');
    const[email,setEmail] = useState('');

    return(
        <AuthContext.Provider value={{authenticated , username , email , setAuthentication , setUsername , setEmail}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);