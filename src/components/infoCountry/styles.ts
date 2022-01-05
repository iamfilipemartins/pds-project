import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Container = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: ${(props: Props): number => (props.width > 1000 ? 24 : 16)}px;
`;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-weight: bold;
  font-size: ${(props: Props): string => (props.width > 1000 ? '1.5em' : '1em')};
  color: ${colors.black};
  flex: 1;
`;

export const Text = styled.p.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-weight: regular;
  font-size: ${(props: Props): any => (props.width > 1000 ? '1em' : '0.5em')};
  line-height: ${(props: Props): any => (props.width > 1000 ? '1.25em' : '1em')};
  color: ${colors.textColor};
  flex: 1;
`;

export default Container;
