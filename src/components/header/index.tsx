import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setLoginData } from '../../redux/actions/userActions';
import { colors, useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo35x35.svg';
import Button from '../button';
import { Title, Container, AppbarContainer, LogoContainer, Logo } from './styles';

export interface HeaderProps {
  selected: string;
}

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(setLoginData({}));
    navigate('/', { replace: true });
  };

  return (
    <Container>
      <AppbarContainer width={width}>
        <LogoContainer width={width} onClick={() => navigate('/')}>
          <Logo src={logo} />
          <Title width={width}>Geolog</Title>
        </LogoContainer>
        <Button
          label="Sair"
          onClick={handleLogout}
          backgroundColor={colors.blue}
          color={colors.white}
          border={colors.blue}
        />
      </AppbarContainer>
    </Container>
  );
};

export default Header;
