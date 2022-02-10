import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Text, Title, BottomContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions } from '../../../utils';
import { setLoginData } from '../../../redux/actions/userActions';
import login from '../services';
import Loading from '../../../utils/svg/components/loading';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisabled(_.isEmpty(email) || _.isEmpty(password));
  }, [email, password]);

  const handleOnClickLogin = async () => {
    if (email && password) {
      try {
        setLoading(true);
        const response = await login(email, password);
        if (response) {
          await dispatch(setLoginData({ email, password, token: response }));
          navigate('/', { replace: true });
        } else {
          await dispatch(setLoginData({}));
        }
      } catch (error) {
        await dispatch(setLoginData({}));
      }
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading width={128} height={128} color={colors.orange} />;
  }

  return (
    <Container width={width}>
      <Title>Login</Title>
      <Input testID="email" type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Input
        testID="password"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={setPassword}
        isObrigatory
      />
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
