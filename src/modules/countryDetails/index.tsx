/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { ICountryMapData, setCountrySelected } from '../../redux/actions/countryActions';
import { AppState } from '../../redux/reducers/rootReducer';
import MapChart from '../map/MapChart';

const CountryDetails = (): any => {
  const [content, setContent] = useState('');

  const { countrySelected } = useSelector((state: AppState) => state.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetCountry = (countrySelectedOnMap: ICountryMapData) => {
    dispatch(setCountrySelected(countrySelectedOnMap));
    navigate(`/details/${countrySelectedOnMap.ISO_A2}`);
  };
  return (
    <div>
      <MapChart
        setTooltipContent={setContent}
        highlighted={countrySelected?.mapData?.ISO_A2}
        onClick={handleSetCountry}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default CountryDetails;
