/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { ICountryMapData, setCountryDetails, setCountrySelected } from '../../redux/actions/countryActions';
import { AppState } from '../../redux/reducers/rootReducer';
import MapChart from '../map/MapChart';
import Header from '../../components/header';
import { Container, ContentContainer, Name, History, NameContainer, Flag } from './styles';
import InfoCountry from '../../components/infoCountry';
import { getFlag, getPTBRCountryName, roundPopulation, useWindowDimensions } from '../../utils';
import { brazilDetails } from '../../utils/data';

const CountryDetails = (): any => {
  const [content, setContent] = useState('');
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countrySelected, countryDetails } = useSelector((state: AppState) => state.country);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countrySelected]);

  const handleSetCountry = async (countrySelectedOnMap: ICountryMapData) => {
    await dispatch(setCountrySelected(countrySelectedOnMap));
    await dispatch(setCountryDetails(brazilDetails));
    navigate(`/details/${countrySelectedOnMap.ISO_A2}`);
  };

  const flagToRender = getFlag(countrySelected.ISO_A2);

  return (
    <Container>
      <Header />
      <ContentContainer width={width}>
        <NameContainer>
          <Name width={width}>{getPTBRCountryName(countrySelected.NAME)}</Name>
          {flagToRender && <Flag src={flagToRender} />}
        </NameContainer>
        {countryDetails?.historico && <History width={width}>{countryDetails.historico}</History>}
        <InfoCountry title="População" label={roundPopulation(countrySelected.POP_EST)} />
        {countryDetails?.governo?.capital?.nome && (
          <InfoCountry title="Capital" label={countryDetails.governo.capital.nome} />
        )}
        {countryDetails?.area?.total && countryDetails?.area?.unidade?.nome && (
          <InfoCountry title="Área" label={`${countryDetails.area.total} ${countryDetails.area.unidade.nome}`} />
        )}
        {countryDetails?.localizacao?.regiao?.nome && (
          <InfoCountry title="Região" label={countryDetails.localizacao.regiao.nome} />
        )}
        {countryDetails?.localizacao?.sub_regiao?.nome && (
          <InfoCountry title="Sub-região" label={countryDetails.localizacao.sub_regiao.nome} />
        )}
        {countryDetails?.localizacao?.regiao_intermediaria?.nome && (
          <InfoCountry title="Região intermediária" label={countryDetails.localizacao.regiao_intermediaria.nome} />
        )}
        {countryDetails?.linguas?.length > 0 && <InfoCountry title="Línguas" label={countryDetails.linguas[0].nome} />}
        {countryDetails?.unidades_monetarias?.length > 0 && (
          <InfoCountry title="Unidades monetárias" label={countryDetails.unidades_monetarias[0].nome} />
        )}
      </ContentContainer>
      <MapChart setTooltipContent={setContent} highlighted={countrySelected?.ISO_A2} onClick={handleSetCountry} />
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
};

export default CountryDetails;
