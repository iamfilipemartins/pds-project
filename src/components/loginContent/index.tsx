import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Text, Title, BottomContainer } from './styles';
import Input from '../input';
import Button from '../button';
import { colors, useWindowDimensions } from '../../utils';

const LoginContent: React.FC = () => {
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    if (email === 'admin' && password === 'admin') {
      navigate(`/`);
    }
  };

  return (
    <Container width={width}>
      <Title>Login</Title>
      <Input type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Input type="password" placeholder="Senha" value={password} onChange={setPassword} isObrigatory />
      <BottomContainer>
        <Text>Esqueceu a senha?</Text>
        <Button
          label="Entrar"
          onClick={handleOnClickLogin}
          backgroundColor={colors.orange}
          color={colors.white}
          border={colors.orange}
        />
      </BottomContainer>
    </Container>
  );
};

export default LoginContent;
