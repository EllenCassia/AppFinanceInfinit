import React, {useState} from 'react';
import { Platform } from 'react-native';

import { 
  Background, 
  Container, 
  Logo,
  Input,
  AreaInput,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(){
    alert('Logado com sucesso!');
  }
  
  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
         source={require('../../assets/Logo.png')}
         />
        <AreaInput>
          <Input 
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignIn}>
            <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>  
      </Container>
    </Background>
  )
}