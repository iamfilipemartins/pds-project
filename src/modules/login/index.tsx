import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Logo, LogoContainer, SignupContainer, Title, Text, LinkText } from './styles';
import Content from './content';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo48x48.svg';

const Login = (): any => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setEmail('');
    setPassword('');
  }, []);

  return (
    <Container data-testid="login">
      <LogoContainer width={width}>
        <Logo src={logo} />
        <Title width={width}>Geolog</Title>
      </LogoContainer>
      <Content email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <SignupContainer width={width}>
        <Text>Ainda não possui uma conta?</Text>
        <LinkText onClick={() => navigate('/signup')}>Clique aqui</LinkText>
      </SignupContainer>
    </Container>
  );
};

export default Login;
