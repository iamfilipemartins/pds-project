import styled from 'styled-components';
import { colors } from './utils';

export interface Props {
  width: number;
}

export const Container = styled.div`
  flex: 1;
  background-color: ${colors.background};
`;

export default Container;