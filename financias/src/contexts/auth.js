import React, {createContext} from "react";

import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [user, setUser] = React.useState(null);
  const [loadingAuth, setLoadingAuth] = React.useState(false);

  const navigation = useNavigation();

  async function signUp(nome, email, senha){
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: senha,
      })
      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  }

  return(
    <AuthContext.Provider value={{ signed: !!user,user,signUp,loadingAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;