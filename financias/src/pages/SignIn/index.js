import React from 'react';
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
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
          />
        </AreaInput>
        <SubmitButton>
            <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>  
      </Container>
    </Background>
  )
}