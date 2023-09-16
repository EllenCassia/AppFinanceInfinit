import React, {useState} from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { Background,Container,AreaInput,Input,SubmitButton,SubmitText,Logo } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth'; 

export default function SignUp(){

  const { signUp,loadingAuth } = React.useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  function handleSignUp(){
    if(nome == '' || email == '' || senha == ''){
      alert('Preencha todos os campos');
      return;
    }else{
      signUp(nome, email, senha);
    }
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
         source={require('../../assets/cadastro.png')}
         />
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </AreaInput>
      <SubmitButton onPress= {handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={28} color="#FFF"/>
        ) : (
          <SubmitText>Cadastrar</SubmitText>
        )}
      </SubmitButton>
        </Container>
    </Background>
  )
}