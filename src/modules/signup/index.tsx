import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Logo, LogoContainer, LoginContainer, Title, Text, LinkText } from './styles';
import Content from './content';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo48x48.svg';

const Signup = (): any => {
  const { width } = useWindowDimensions();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <LogoContainer width={width}>
        <Logo src={logo} />
        <Title width={width}>Geolog</Title>
      </LogoContainer>
      <Content
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginContainer width={width}>
        <Text>Já possui uma conta?</Text>
        <LinkText onClick={() => navigate('/login')}>Entrar</LinkText>
      </LoginContainer>
    </Container>
  );
};

export default Signup;