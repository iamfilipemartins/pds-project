import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 1;
`;

export const Select = styled.select.attrs((props: Props) => ({
  error: props.error,
}))<Props>`
  width: 100%;
  height: 38px;
  background: white;
  color: ${colors.textColor};
  padding: 4px;
  font-family: Inter;
  font-size: 1em;
  line-height: 1.2em;
  border: 1px solid ${(props: Props): string => (props.error ? colors.orange : colors.grey200)};
  border-radius: 3px;
  flex-direction: row;

  option {
    color: ${colors.textColor};
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 1em;
  line-height: 1.2em;
  color: ${colors.textColor};
`;

export default Select;
