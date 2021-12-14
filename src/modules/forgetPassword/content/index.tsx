import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Text, Title, BottomContainer } from './styles';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { colors, useWindowDimensions, validateEmail } from '../../../utils';
import { setEmailRecoveryData } from '../../../redux/actions/userActions';

export interface Props {
  email: string;
  setEmail: (value: string) => void;
}

const Content: React.FC<Props> = ({ email, setEmail }: Props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!validateEmail(email));
  }, [email]);

  const handleGoBack = () => {
    navigate(`/login`);
  };

  const handleSendEmail = async () => {
    await dispatch(setEmailRecoveryData(email));
    navigate('/login');
  };

  return (
    <Container width={width}>
      <Title>Esqueci minha senha</Title>
      <Input type="email" placeholder="Email" value={email} onChange={setEmail} isObrigatory />
      <Text>Enviaremos um email com as instruções para criar uma nova senha.</Text>
      <BottomContainer width={width}>
        <Button
          label="Voltar"
          onClick={handleGoBack}
          backgroundColor={colors.grey050}
          color={colors.black}
          border={colors.grey200}
        />
        <Button
          label="Enviar"
          onClick={handleSendEmail}
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
