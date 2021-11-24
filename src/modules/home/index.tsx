import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MapChart from '../map/MapChart';
import { ICountryMapData, setCountrySelected } from '../../redux/actions/countryActions';
import Header from '../../components/header';
import Container, { BodyContainer, ItemsHomeContainer } from './styles';
import ItemHome from '../../components/itemHome';

const Home = (): any => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetCountry = async (countrySelected: ICountryMapData) => {
    await dispatch(setCountrySelected(countrySelected));
    navigate(`/details/${countrySelected.ISO_A2}`);
  };

  return (
    <Container>
      <Header />
      <BodyContainer>
        <ItemsHomeContainer>
          <ItemHome label="população e área do país" icon="groups" />
          <ItemHome label="localização por região" icon="place" />
          <ItemHome label="línguas faladas" icon="people" />
        </ItemsHomeContainer>
        <ItemsHomeContainer>
          <ItemHome label="unidade monetária" icon="monetary" />
          <ItemHome label="capital" icon="house" />
          <ItemHome label="e muito mais..." icon="plus" />
        </ItemsHomeContainer>
        <MapChart setTooltipContent={setContent} onClick={handleSetCountry} />
        <ReactTooltip>{content}</ReactTooltip>
      </BodyContainer>
    </Container>
  );
};

export default Home;
