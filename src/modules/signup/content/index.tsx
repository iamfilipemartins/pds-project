import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, InputContainer, Title, BottomContainer, NameContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, onlyLetters, useWindowDimensions, validateEmail } from '../../../utils';
import { setSignupData } from '../../../redux/actions/userActions';

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

const Content: React.FC<Props> = ({
  name,
  lastName,
  email,
  password,
  setName,
  setLastName,
  setEmail,
  setPassword,
}: Props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(validateEmail(email) && !_.isEmpty(name) && !_.isEmpty(lastName) && !_.isEmpty(password)));
  }, [name, lastName, email, password]);

  const handleOnClickSignup = async () => {
    await dispatch(setSignupData({name, lastName, email, password}));
    navigate('/login');
  };

  return (
    <Container width={width}>
      <Title>Criar conta</Title>
      <NameContainer width={width}>
        <InputContainer width={width} marginRight={8}>
          <Input type="text" placeholder="Nome" value={name} onChange={(value:string) => setName(onlyLetters(value))} isObrigatory />
        </InputContainer>
        <InputContainer width={width} marginLeft={8}>
          <Input type="text" placeholder="Sobrenome" value={lastName} onChange={(value:string) => setLastName(onlyLetters(value))} isObrigatory />
        </InputContainer>
      </NameContainer>
      <Input type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Input type="password" placeholder="Senha" value={password} onChange={setPassword} isObrigatory />
      <BottomContainer width={width}>
        <Button
          label="Cadastrar"
          onClick={handleOnClickSignup}
          backgroundColor={colors.orange}
          color={colors.white}
          border={colors.orange}
          disabled={disabled}
        />
      </BottomContainer>
    </Container>
  );
};

export default Content;
