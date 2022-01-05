import React from 'react';
import { Container, Title, Text } from './styles';
import { useWindowDimensions } from '../../utils';

export interface Props {
  label: string;
  title: string;
}

const InfoCountry: React.FC<Props> = ({ label, title }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <Container width={width}>
      <Title width={width}>{title}</Title>
      <Text width={width}>{label}</Text>
    </Container>
  );
};

export default InfoCountry;
