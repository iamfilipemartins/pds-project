import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  color: string;
  backgroundColor?: string;
  border: string;
}

export const Container = styled.div``;

export const ButtonStyled = styled.button.attrs((props: Props) => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
  border: props.border,
}))<Props>`
  border-radius: 8px;
  background: ${(props: Props): string => props.backgroundColor || 'transparent'};
  border: ${(props: Props): string => `1px solid ${props.border}`};
  color: ${(props: Props): string => props.color || colors.textColor};
  font-family: Inter;
  font-size: 1em;
  margin: 8px;
  padding: 0.5em 1em;
`;

export default ButtonStyled;
