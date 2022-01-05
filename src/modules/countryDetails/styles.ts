import styled from 'styled-components';
import { colors } from '../../utils';

export interface Props {
  width: number;
}

export const Container = styled.div`
  flex: 1;
`;

export const Flag = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ContentContainer = styled.div.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  flex: 1;
  padding-left: ${(props: Props): number => (props.width > 1000 ? 24 : 16)}px;
  padding-right: ${(props: Props): number => (props.width > 1000 ? 24 : 16)}px;
`;

export const Name = styled.h1.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-weight: bold;
  font-size: ${(props: Props): string => (props.width > 1000 ? '1.5em' : '1em')};
  color: ${colors.black};
  margin-right: 24px;
`;

export const History = styled.p.attrs((props: Props) => ({
  width: props.width,
}))<Props>`
  font-family: Inter;
  font-weight: regular;
  font-size: ${(props: Props): any => (props.width > 1000 ? '1em' : '0.5em')};
  line-height: ${(props: Props): any => (props.width > 1000 ? '1.25em' : '1em')};
  color: ${colors.textColor};
  flex: 1;
  margin-top: 16px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`;

export default Container;
