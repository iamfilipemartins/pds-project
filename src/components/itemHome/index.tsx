import React from 'react';
import logo from '../../utils/svg/Logo64x64.svg';
import groups from '../../utils/svg/groups.svg';
import house from '../../utils/svg/house.svg';
import monetary from '../../utils/svg/monetary.svg';
import people from '../../utils/svg/people.svg';
import place from '../../utils/svg/place.svg';
import plus from '../../utils/svg/plus.svg';

import { Container, Logo, Text } from './styles';
import { useWindowDimensions } from '../../utils';

export interface Props {
  label: string;
  icon: string;
}

const getIcon = (icon: string) : any => {
  switch (icon) {
    case 'groups':
      return groups;
    case 'house':
      return house;
    case 'monetary':
      return monetary;
    case 'people':
      return people;
    case 'place':
      return place;
    case 'plus':
      return plus;
    default:
      return logo;
  }
};

const ItemHome: React.FC<Props> = ({ label, icon }: Props) => {
  const iconToRender = getIcon(icon);
  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <Logo src={iconToRender} />
      <Text>{label}</Text>
    </Container>
  );
};

export default ItemHome;
