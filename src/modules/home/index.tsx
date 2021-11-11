import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import MapChart from '../map/MapChart';
import { ICountryMapData, setCountrySelected } from '../../redux/actions/countryActions';


const Home = (): any => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSetCountry = async (countrySelected: ICountryMapData) => {
    await dispatch(setCountrySelected(countrySelected));
    navigate(`/details/${countrySelected.ISO_A2}`)
  }

  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MapChart setTooltipContent={setContent} onClick={handleSetCountry}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Home;