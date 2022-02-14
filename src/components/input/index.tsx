import React from 'react';
import { Container, InputStyled, Title } from './styles';

export interface Props {
  placeholder: string;
  value: string;
  onChange: (value: any) => void;
  type?: string;
  isObrigatory?: boolean;
  testID?: string;
  error?: boolean;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange, type, isObrigatory, testID, error }: Props) => {
  return (
    <Container>
      <Title>{`${placeholder}${isObrigatory ? ' *' : ''}`}</Title>
      {type ? (
        <InputStyled
          error={error}
          data-testid={testID}
          type={type}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
        />
      ) : (
        <InputStyled error={error} data-testid={testID} value={value} onChange={(e: any) => onChange(e.target.value)} />
      )}
    </Container>
  );
};

export default Input;
