import React from 'react';
import logo from '../../utils/svg/Logo64x64.svg';
import groups from '../../utils/svg/groups.svg';
import house from '../../utils/svg/house.svg';
import monetary from '../../utils/svg/monetary.svg';
import people from '../../utils/svg/people.svg';
import place from '../../utils/svg/place.svg';
import plus from '../../utils/svg/plus.svg';
import groups24 from '../../utils/svg/groups24x24.svg';
import house24 from '../../utils/svg/house24x24.svg';
import monetary24 from '../../utils/svg/monetary24x24.svg';
import people24 from '../../utils/svg/people24x24.svg';
import place24 from '../../utils/svg/place24x24.svg';
import plus24 from '../../utils/svg/plus24x24.svg';
import groups48 from '../../utils/svg/groups48x48.svg';
import house48 from '../../utils/svg/house48x48.svg';
import monetary48 from '../../utils/svg/monetary48x48.svg';
import people48 from '../../utils/svg/people48x48.svg';
import place48 from '../../utils/svg/place48x48.svg';
import plus48 from '../../utils/svg/plus48x48.svg';
import groups72 from '../../utils/svg/groups72x72.svg';
import house72 from '../../utils/svg/house72x72.svg';
import monetary72 from '../../utils/svg/monetary72x72.svg';
import people72 from '../../utils/svg/people72x72.svg';
import place72 from '../../utils/svg/place72x72.svg';
import plus72 from '../../utils/svg/plus72x72.svg';
import { Container, Logo, Text } from './styles';
import { useWindowDimensions } from '../../utils';

export interface Props {
  label: string;
  icon: string;
}

const getIcon = (icon: string, width: number): any => {
  switch (icon) {
    case 'groups':
      if (width < 500) {
        return groups24;
      }
      if (width < 1000) {
        return groups48;
      }
      if (width < 1250) {
        return groups72;
      }
      return groups;
    case 'house':
      if (width < 500) {
        return house24;
      }
      if (width < 1000) {
        return house48;
      }
      if (width < 1250) {
        return house72;
      }
      return house;
    case 'monetary':
      if (width < 500) {
        return monetary24;
      }
      if (width < 1000) {
        return monetary48;
      }
      if (width < 1250) {
        return monetary72;
      }
      return monetary;
    case 'people':
      if (width < 500) {
        return people24;
      }
      if (width < 1000) {
        return people48;
      }
      if (width < 1250) {
        return people72;
      }
      return people;
    case 'place':
      if (width < 500) {
        return place24;
      }
      if (width < 1000) {
        return place48;
      }
      if (width < 1250) {
        return place72;
      }
      return place;
    case 'plus':
      if (width < 500) {
        return plus24;
      }
      if (width < 1000) {
        return plus48;
      }
      if (width < 1250) {
        return plus72;
      }
      return plus;
    default:
      return logo;
  }
};

const ItemHome: React.FC<Props> = ({ label, icon }: Props) => {
  const { width } = useWindowDimensions();
  const iconToRender = getIcon(icon, width);
  return (
    <Container width={width}>
      <Logo src={iconToRender} />
      <Text width={width}>{label}</Text>
    </Container>
  );
};

export default ItemHome;
