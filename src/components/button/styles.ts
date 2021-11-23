import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  color: string;
  backgroundColor: string;
  border: boolean;
}

export const Container = styled.div``;

export const ButtonStyled = styled.button.attrs((props: Props) => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
  border: props.border,
}))<Props>`
  background-color: ${(props: Props): string => props.backgroundColor || 'transparent'};
  color: ${(props: Props): string => props.color || colors.textColor};
  font-size: 1em;
  margin: 8px;
  padding: 0.25em 1em;
  border-radius: 8px;
  border: ${(props: Props): string => `1px solid ${props.border}`};
`;

export default ButtonStyled;
