import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Logo = styled.img``;

export const Title = styled.h1`
  font-family: Inter;
  font-weight: bold;
  font-size: 2em;
  margin-left: 24px;
  letter-spacing: 1px;
  color: ${colors.white};
`;

export const Container = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const SearchContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  background-color: ${colors.blue};
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const AppbarContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  position: static;
  background-color: ${colors.blue};
  display: flex;
  flex: 1;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const LogoContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
`;

export const ProfileContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
`;
