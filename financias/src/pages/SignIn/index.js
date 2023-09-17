import React, {useState} from 'react';
import { Platform, ActivityIndicator } from 'react-native';

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
import { AuthContext } from '../../contexts/auth'; 

export default function SignIn(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn,loadingAuth } = React.useContext(AuthContext);

  function handleSignIn(){
    signIn(email, password);
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
        <SubmitButton activeOpacity={0.8} onPress={handleSignIn}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF"/>
          ) : (
            <SubmitText>Acessar</SubmitText>
            )
        }  
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>  
      </Container>
    </Background>
  )
}