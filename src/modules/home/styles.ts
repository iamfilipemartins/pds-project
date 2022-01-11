import styled from 'styled-components';

export interface Props {
  width: number;
}

export const Container = styled.div`
  flex: 1;
  height: 100vh;
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

export const LoadingContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export default Container;
