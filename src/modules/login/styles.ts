import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Logo = styled.img``;

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  height: 100vh;
`;

export const LogoContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-size: ${(props: Props): string => (props.width > 1000 ? '2em' : '1em')};
  margin-left: ${(props: Props): number => (props.width > 1000 ? 24 : 0)}px;
  color: ${colors.black};
`;

export default Container;
