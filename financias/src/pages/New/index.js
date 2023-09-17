import React, {useState, useEffect} from "react";
import { Background,Input, SubmitButton, SubmitText } from "./styles";

import Header from "../../components/Header";
import { SafeAreaView, TouchableNativeFeedback } from "react-native";
import api from "../../services/api";
import { useIsFocused } from '@react-navigation/native';


export default function New() {
  const isFocused = useIsFocused();
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => { 
    async function loadList(){
      const response = await api.get('/registros',{
        
      });
    }
    if(isFocused){
      setDescricao('');
      setValor('');
    }
    loadList();
  }, []);

  return (
    <TouchableNativeFeedback onPress={()=> KeyboardEvent.dismiss()}>

    <Background>
      <Header title="Registrando"/>

      <SafeAreaView style={{marginTop:14, alignItems: 'center'}}>
        <Input
          placeholder="Descrição desse registro"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
         <Input
          placeholder="Valor desejado"
          keyboardType="numeric"
          value={valor}
          onChangeText={(text) => setValor(text)}
        />
        <SubmitButton>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </Background>
    </TouchableNativeFeedback>
  )
}