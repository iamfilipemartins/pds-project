import React from 'react';
import { Container, Select, Title } from './styles';

export interface Props {
  placeholder: string;
  value: any;
  handleChange: (value: any) => void;
  isObrigatory?: boolean;
  options: Array<any>;
  error?: boolean;
}

const SelectOption: React.FC<Props> = ({ placeholder, value, isObrigatory, handleChange, options, error }: Props) => {
  return (
    <Container>
      <Title>{`${placeholder}${isObrigatory ? ' *' : ''}`}</Title>
      <Select value={value} onChange={handleChange} error={error}>
        <option value="" hidden>
          Selecione um campo
        </option>
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectOption;
