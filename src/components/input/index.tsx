import React from 'react';
import { Container, InputStyled, Title } from './styles';

export interface Props {
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  type?: string;
  isObrigatory?: boolean;
  testID?: string;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange, type, isObrigatory, testID }: Props) => {
  return (
    <Container>
      <Title>{`${placeholder}${isObrigatory ? ' *' : ''}`}</Title>
      {type ? (
        <InputStyled data-testid={testID} type={type} value={value} onChange={(e: any) => onChange(e.target.value)} />
      ) : (
        <InputStyled data-testid={testID} value={value} onChange={(e: any) => onChange(e.target.value)} />
      )}
    </Container>
  );
};

export default Input;
