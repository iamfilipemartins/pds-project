/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags';
import { ICountryMapData, setCountrySelected, setCountryDetails } from '../../redux/actions/countryActions';
import { AppState } from '../../redux/reducers/rootReducer';
import MapChart from '../map/MapChart';
import Header from '../../components/header';
import { Container, ContentContainer, Name, History, NameContainer, LoadingContainer } from './styles';
import InfoCountry from '../../components/infoCountry';
import {
  colors,
  getPTBRCountryName,
  getArea,
  roundPopulation,
  getPopulationDensity,
  useWindowDimensions,
} from '../../utils';
import getCountryDetails from './services';
import { COUNTRY_DETAILS_INITIAL_STATE } from '../../redux/reducers/countryReducer';
import Loading from '../../utils/svg/components/loading';

const CountryDetails: React.FC = (): any => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countrySelected, countryDetails } = useSelector((state: AppState) => state.country);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countrySelected]);

  const handleSetCountry = async (countrySelectedOnMap: ICountryMapData) => {
    try {
      setLoading(true);
      await dispatch(setCountrySelected(countrySelectedOnMap));
      const response = await getCountryDetails(countrySelectedOnMap.ISO_A2);
      if (response) {
        await dispatch(setCountryDetails(response));
        navigate(`/details/${countrySelectedOnMap.ISO_A2}`);
      } else {
        await dispatch(setCountryDetails(COUNTRY_DETAILS_INITIAL_STATE));
      }
    } catch (error) {
      await dispatch(setCountryDetails(COUNTRY_DETAILS_INITIAL_STATE));
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <Loading width={100} height={100} color={colors.orange} />
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <ContentContainer width={width}>
        <NameContainer>
          <Name width={width}>{getPTBRCountryName(countrySelected.NAME)}</Name>
          <Flag code={countrySelected.ISO_A2} height="40" width="40" />
        </NameContainer>
        {countryDetails?.historico && <History width={width}>{countryDetails.historico}</History>}
        <InfoCountry title="População" label={roundPopulation(countrySelected.POP_EST)} />
        {countryDetails?.area && (
          <>
            <InfoCountry title="Área" label={getArea(countryDetails.area)} />
            <InfoCountry
              title="Densidade demográfica"
              label={getPopulationDensity(countrySelected.POP_EST, countryDetails.area)}
            />
          </>
        )}
        {countryDetails?.governo && <InfoCountry title="Capital" label={countryDetails.governo} />}
        {countryDetails?.localizacao && <InfoCountry title="Região" label={countryDetails.localizacao} />}
        {countryDetails?.linguas?.length > 0 && <InfoCountry title="Línguas" label={countryDetails.linguas[0]} />}
        {countryDetails?.moedas?.length > 0 && <InfoCountry title="Moedas" label={countryDetails.moedas[0]} />}
      </ContentContainer>
      <MapChart setTooltipContent={setContent} highlighted={countrySelected?.ISO_A2} onClick={handleSetCountry} />
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
};

export default CountryDetails;
