import React from 'react';
import { useNavigate } from 'react-router';
import { Container, InputContainer, Title, BottomContainer, NameContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions } from '../../../utils';

export interface Props {
  name: string;
  lastName: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const Content: React.FC<Props> = ({name, lastName, email, password, setName, setLastName, setEmail, setPassword }: Props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleOnClickLogin = () => {
    if (email === 'admin' && password === 'admin') {
      navigate(`/`);
    }
  };

  return (
    <Container width={width}>
      <Title>Criar conta</Title>
      <NameContainer width={width}>
        <InputContainer width={width} marginRight={8}>
          <Input type="text" placeholder="Nome" value={name} onChange={setName} isObrigatory />
        </InputContainer>
        <InputContainer width={width} marginLeft={8}>
          <Input type="text" placeholder="Sobrenome" value={lastName} onChange={setLastName} isObrigatory />
        </InputContainer>
      </NameContainer>
      <Input type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Input type="password" placeholder="Senha" value={password} onChange={setPassword} isObrigatory />
      <BottomContainer width={width}>
        <Button
          label="Cadastrar"
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
