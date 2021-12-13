import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 1;
`;

export const InputStyled = styled.input`
  font-size: 1em;
  padding: 8px;
  background: ${colors.grey050};
  border-radius: 3px;
  ::placeholder {
    color: ${colors.textColor};
  }
  border: 1px solid ${colors.grey200};
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-family: Inter;
  font-size: 1em;
  line-height: 1.2em;
  color: ${colors.textColor};
`;

export default InputStyled;
