/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { ICountryMapData, setCountrySelected } from '../../redux/actions/countryActions';
import { AppState } from '../../redux/reducers/rootReducer';
import MapChart from '../map/MapChart';
import Header from '../../components/header';
import Container from './styles';

const CountryDetails = (): any => {
  const [content, setContent] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { countrySelected } = useSelector((state: AppState) => state.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetCountry = (countrySelectedOnMap: ICountryMapData) => {
    dispatch(setCountrySelected(countrySelectedOnMap));
    navigate(`/details/${countrySelectedOnMap.ISO_A2}`);
  };
  return (
    <Container>
      <Header />
      <MapChart
        setTooltipContent={setContent}
        highlighted={countrySelected?.mapData?.ISO_A2}
        onClick={handleSetCountry}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
};

export default CountryDetails;
