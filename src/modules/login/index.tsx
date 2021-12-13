import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Logo, LogoContainer, SignupContainer, Title, Text, LinkText } from './styles';
import LoginContent from '../../components/loginContent';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo48x48.svg';

const Login = (): any => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    if (email === 'admin' && password === 'admin') {
      navigate(`/`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <LogoContainer width={width}>
        <Logo src={logo} />
        <Title width={width}>Geolog</Title>
      </LogoContainer>
      <LoginContent email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <SignupContainer width={width}>
        <Text>Ainda não possui uma conta?</Text>
        <LinkText onClick={handleOnClickLogin}>Clique aqui</LinkText>
      </SignupContainer>
    </Container>
  );
};

export default Login;
