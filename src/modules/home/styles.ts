import styled from 'styled-components';

export interface Props {
  width: number;
}

export const Container = styled.div`
  flex: 1;
`;

export const BodyContainer = styled.div`
  flex: 1;
`;

export const ItemsHomeContainer = styled.div`
  padding: 16px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export default Container;
