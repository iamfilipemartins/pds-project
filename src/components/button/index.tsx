import React from 'react';

import { ButtonStyled, Container } from './styles';

export interface ButtonProps {
  label: string;
  onClick(params: any): void;
  color: string;
  backgroundColor: string;
  border: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, backgroundColor, border }: ButtonProps) => {
  return (
    <Container>
      <ButtonStyled onClick={onClick} color={color} backgroundColor={backgroundColor} border={border}>
        {label}
      </ButtonStyled>
    </Container>
  );
};

export default Button;
