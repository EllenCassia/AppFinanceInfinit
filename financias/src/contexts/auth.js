import React, {Text, createContext, useEffect} from "react";

import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext({});

function AuthProvider({children}){
  const [user, setUser] = React.useState(null);
  const [loadingAuth, setLoadingAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const navigation = useNavigation();

  useEffect(() => {

    async function loadStorage(){
     
      const storageUser = await AsyncStorage.getItem('@finToken');

      if(storageUser){
        setLoading(true);
        const response = await api.get('/me', {
        headers: { 
          Authorization: `Bearer ${storageUser}` 
        }
      }).catch((error) => {
        setUser(null);
      })
        api.defaults.headers.Authorization = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }
    } 
    loadStorage(); 
    setLoading(false);

  },[])

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
  const signIn = async (email, senha) => {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: senha
      })
      const {id,name,token} = response.data;
      
      const data = {
        id,
        name,
        email,
        token,
      };

      await AsyncStorage.setItem('@finToken',token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({  
        id,
        name,
        email,
      });

      setLoadingAuth(false);

    } catch (error) {
      alert("Usuário ou senha inválidos");
      setLoadingAuth(false);
    }
  }
  async function signOut(){
    await AsyncStorage.clear().then(() => { 
    setUser(null);
  }).catch((error) => {
    console.log(error);
  })
}

  return(
    <AuthContext.Provider value={{ signed: !!user,user,signUp,signOut,loadingAuth,signIn,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;