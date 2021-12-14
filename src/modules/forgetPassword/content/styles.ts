import styled from 'styled-components';
import { colors } from '../../../utils';

export interface Props {
  width: number;
}

export const BottomContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: ${(props: Props): string => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Container = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  text-align: center;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: ${(props: Props): string => (props.width > 1000 ? '25%' : '75%')};
`;

export const Text = styled.p`
  font-family: Inter;
  font-weight: regular;
  font-size: 1em;
  line-height: 1.25em;
  color: ${colors.textColor};
  text-align: left;
`;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-size: 1.25em;
  line-height: 1.5em;
  color: ${colors.textColor};
`;

export default Container;
