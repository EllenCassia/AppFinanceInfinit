import React from 'react';
import { Platform, Text} from 'react-native';

import { Background,Container,AreaInput,Input,SubmitButton,SubmitText,Logo } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth'; 

export default function SignUp(){
  const { signed } = React.useContext(AuthContext);

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
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>
      <SubmitButton>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>
        </Container>
    </Background>
  )
}