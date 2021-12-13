import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Text, Title, BottomContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions } from '../../../utils';

export interface Props {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const Content: React.FC<Props> = ({ email, password, setEmail, setPassword }: Props) => {
  const { width } = useWindowDimensions();
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
      <BottomContainer width={width}>
        <Text onClick={() => navigate('/forget-password')}>Esqueceu a senha?</Text>
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

export default Content;
