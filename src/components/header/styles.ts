import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
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
  padding: 8px;
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

export const StockContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: center;
`;
