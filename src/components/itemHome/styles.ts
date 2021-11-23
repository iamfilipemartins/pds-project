import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Container = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 24px;
  background-color: ${colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: ${(props: Props): number => (props.width / 6 || 256)}px;
  height: ${(props: Props): number => props.width ? ((props.width / 6) * 3 / 4) : 192}px;
`;

export const Logo = styled.img``;

export const Text = styled.p`
  font-family: Inter;
  font-weight: regular;
  font-size: 1em;
  line-height: 1.5em;
  color: ${colors.textColor};
`;

export default Container;
