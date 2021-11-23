import React from 'react';
import { useWindowDimensions } from '../../utils';
import logo from '../../utils/svg/Logo35x35.svg';
import { Title, Container, AppbarContainer, StockContainer } from './styles';

export interface HeaderProps {
  selected: string;
}

const Header: React.FC<HeaderProps> = ({ selected }) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <AppbarContainer width={width}>
        <StockContainer width={width}>
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Geolog</Title>
        </StockContainer>
      </AppbarContainer>
    </Container>
  );
};

export default Header;
