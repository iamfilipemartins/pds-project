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
  flex-direction: ${(props: Props): string => (props.width > 600 ? 'row' : 'column')};
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-size: ${(props: Props): string => (props.width > 600 ? '2.5em' : '1.5em')};
  margin-left: ${(props: Props): number => (props.width > 600 ? 24 : 0)}px;
  color: ${colors.black};
`;

export const SignupContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: ${(props: Props): string => (props.width > 600 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Text = styled.p`
  font-family: Inter;
  font-size: 1em;
  line-height: 1.25em;
  color: ${colors.textColor};
  margin-right: 8px;
`;

export const LinkText = styled.p`
  font-family: Inter;
  font-size: 1em;
  line-height: 1.25em;
  color: ${colors.blue};
`;

export default Container;
