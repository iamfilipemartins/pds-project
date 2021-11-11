import React from 'react';

import { ButtonStyled } from './styles';

interface Props {
    title: string,
    onClick(params: any): void
};

const Button: React.FC<Props> = ({title, onClick} : Props) => <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;

export default Button;
