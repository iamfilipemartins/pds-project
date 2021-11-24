import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Logo = styled.img``;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-weight: bold;
  font-size: ${(props: Props): string => (props.width > 1000 ? '2em' : '1em')};
  margin-left: ${(props: Props): number => (props.width > 1000 ? 24 : 0)}px;
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
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${(props: Props): number => (props.width > 1000 ? 0 : 16)}px;
  padding-bottom: ${(props: Props): number => (props.width > 1000 ? 0 : 16)}px;
`;

export const LogoContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
`;
