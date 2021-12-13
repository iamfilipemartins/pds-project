import React from 'react';
import { Container, InputStyled, Title } from './styles';

export interface Props {
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  type?: string;
  isObrigatory?: boolean;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange, type, isObrigatory }: Props) => {
  return (
    <Container>
      <Title>{`${placeholder}${isObrigatory ? ' *' : ''}`}</Title>
      {type ? (
        <InputStyled type={type} value={value} onChange={(e: any) => onChange(e.target.value)} />
      ) : (
        <InputStyled value={value} onChange={(e: any) => onChange(e.target.value)} />
      )}
    </Container>
  );
};

export default Input;
