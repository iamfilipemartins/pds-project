import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Title, BottomContainer, Text } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions, validateEmail } from '../../../utils';
import { setLoginData } from '../../../redux/actions/userActions';
import Loading from '../../../utils/svg/components/loading';
import signup from '../services';

export interface Props {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  success: boolean;
  setSuccess: (value: boolean) => void;
}

const Content: React.FC<Props> = ({ email, password, setEmail, setPassword, success, setSuccess }: Props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDisabled(!validateEmail(email) || _.isEmpty(password));
  }, [email, password]);

  useEffect(() => {
    if (success) {
      setTimeout(() => navigate('/'), 2000);
    }
  }, [success]);

  const handleOnClickSignup = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await signup(email, password);
      if (response && response.novoUser) {
        await dispatch(
          setLoginData({ token: response.token, email: response.novoUser.nome, password: response.novoUser.senha })
        );
        setSuccess(true);
      } else {
        setError(true);
        await dispatch(setLoginData({}));
      }
    } catch (e) {
      setError(true);
      await dispatch(setLoginData({}));
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading width={96} height={96} color={colors.orange} />;
  }

  return (
    <Container width={width}>
      <Title>Criar conta</Title>
      <Input
        type="email"
        testID="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        isObrigatory
        error={error}
      />
      <Input
        type="password"
        testID="password"
        placeholder="Senha"
        value={password}
        onChange={setPassword}
        isObrigatory
        error={error}
      />
      <BottomContainer success={success} width={width}>
        {success ? (
          <Text>Cadastro realizado com sucesso!</Text>
        ) : (
          <Button
            label="Cadastrar"
            onClick={handleOnClickSignup}
            backgroundColor={colors.orange}
            color={colors.white}
            border={colors.orange}
            disabled={disabled}
          />
        )}
      </BottomContainer>
    </Container>
  );
};

export default Content;
