import React from 'react';
import { colors } from '../../utils';

import { ButtonStyled, Container } from './styles';

export interface ButtonProps {
  label: string;
  onClick(params: any): void;
  color: string;
  backgroundColor?: string;
  border?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, backgroundColor, border, disabled }: ButtonProps) => {
  const handleOnClick = (value: any) => {
    if(!disabled){
      onClick(value);
    }
  }

  return (
    <Container>
      <ButtonStyled onClick={handleOnClick} color={disabled ? colors.white : color} backgroundColor={disabled ? colors.grey200 : backgroundColor} border={disabled ? colors.grey200 : border} disabled={disabled}>
        {label}
      </ButtonStyled>
    </Container>
  );
};

export default Button;
