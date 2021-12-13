import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  width: 30%;
  height: 30%;
`;

export const Logo = styled.img``;

export const Text = styled.p`
  font-family: Inter;
  font-weight: regular;
  font-size: 0.75em;
  line-height: 1em;
  color: ${colors.textColor};
`;

export const Title = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-size: 1.25em;
  line-height: 1.5em;
  margin-left: ${(props: Props): number => (props.width > 1000 ? 24 : 0)}px;
  color: ${colors.black};
`;

export default Container;
