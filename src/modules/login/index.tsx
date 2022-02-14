import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Logo, LogoContainer, SignupContainer, Title, Text, LinkText } from './styles';
import Content from './content';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo48x48.svg';
import { COUNTRY_DETAILS_INITIAL_STATE, COUNTRY_SELECTED_INITIAL_STATE } from '../../redux/reducers/countryReducer';
import { setCountryDetails, setCountrySelected } from '../../redux/actions/countryActions';
import { setSignupData } from '../../redux/actions/userActions';

const Login: React.FC = (): any => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanData = async () => {
      await dispatch(setSignupData({}));
      await dispatch(setCountryDetails(COUNTRY_DETAILS_INITIAL_STATE));
      await dispatch(setCountrySelected(COUNTRY_SELECTED_INITIAL_STATE));
    };
    window.scrollTo(0, 0);
    setEmail('');
    setPassword('');
    cleanData();
  }, []);

  return (
    <Container data-testid="login">
      <LogoContainer width={width}>
        <Logo src={logo} />
        <Title width={width}>Geolog</Title>
      </LogoContainer>
      <Content email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <SignupContainer width={width}>
        <Text>Ainda não possui uma conta?</Text>
        <LinkText onClick={() => navigate('/signup')}>Clique aqui</LinkText>
      </SignupContainer>
    </Container>
  );
};

export default Login;
