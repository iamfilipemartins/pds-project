import React, { useEffect } from 'react';
import { Container, Logo, LogoContainer, Title } from './styles';
import LoginContent from '../../components/loginContent';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo35x35.svg';

const Login = (): any => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <LogoContainer width={width}>
        <Logo src={logo} />
        <Title width={width}>Geolog</Title>
      </LogoContainer>
      <LoginContent />
    </Container>
  );
};

export default Login;
