import React from 'react';
import { useNavigate } from 'react-router';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo48x48.svg';
import { Title, Container, AppbarContainer, LogoContainer, Logo } from './styles';

export interface HeaderProps {
  selected: string;
}

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <Container>
      <AppbarContainer width={width}>
        <LogoContainer width={width} onClick={() => navigate('/')}>
          <Logo src={logo} />
          <Title>Geolog</Title>
        </LogoContainer>
      </AppbarContainer>
    </Container>
  );
};

export default Header;
