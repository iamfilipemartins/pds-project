import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Title, BottomContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions, validateEmail } from '../../../utils';
import { setSignupData } from '../../../redux/actions/userActions';
import Loading from '../../../utils/svg/components/loading';
import signup from '../services';

export interface Props {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const Content: React.FC<Props> = ({ email, password, setEmail, setPassword }: Props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisabled(!validateEmail(email) || _.isEmpty(password));
  }, [email, password]);

  const handleOnClickSignup = async () => {
    try {
      setLoading(true);
      const response = await signup(email, password);
      if (response) {
        await dispatch(setSignupData(response));
        navigate('/login');
      } else {
        await dispatch(setSignupData({}));
      }
    } catch (error) {
      await dispatch(setSignupData({}));
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading width={128} height={128} color={colors.orange} />;
  }

  return (
    <Container width={width}>
      <Title>Criar conta</Title>
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
