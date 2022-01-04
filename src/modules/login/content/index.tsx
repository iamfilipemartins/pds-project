import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Text, Title, BottomContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions, validateEmail } from '../../../utils';
import { setLoginData } from '../../../redux/actions/userActions';

export interface Props {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const Content: React.FC<Props> = ({ email, password, setEmail, setPassword }: Props) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(validateEmail(email) && !_.isEmpty(password)));
  }, [email, password]);

  const handleOnClickLogin = async () => {
    if (email === 'admin@admin.com' && password === 'admin') {
      await dispatch(setLoginData({ email, password }));
      navigate('/', { replace: true });
    }
  };

  return (
    <Container width={width}>
      <Title>Login</Title>
      <Input testID="email" type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Input testID="password" type="password" placeholder="Senha" value={password} onChange={setPassword} isObrigatory />
      <BottomContainer width={width}>
        <Text onClick={() => navigate('/forget-password')}>Esqueceu a senha?</Text>
        <Button
          label="Entrar"
          onClick={handleOnClickLogin}
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
