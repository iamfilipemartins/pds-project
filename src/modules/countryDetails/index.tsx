/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags';
import _ from 'lodash';
import { ICountryMapData, setCountrySelected, setCountryDetails } from '../../redux/actions/countryActions';
import { AppState } from '../../redux/reducers/rootReducer';
import MapChart from '../map/MapChart';
import Header from '../../components/header';
import {
  Container,
  ContentContainer,
  Name,
  History,
  NameContainer,
  LoadingContainer,
  TopContainer,
  BottomContainer,
} from './styles';
import InfoCountry from '../../components/infoCountry';
import {
  colors,
  getPTBRCountryName,
  getArea,
  roundPopulation,
  getPopulationDensity,
  useWindowDimensions,
  showArrayStrings,
} from '../../utils';
import getCountryDetails, { updateCountryDetails } from './services';
import { COUNTRY_DETAILS_INITIAL_STATE } from '../../redux/reducers/countryReducer';
import Loading from '../../utils/svg/components/loading';
import Button from '../../components/button';
import Input from '../../components/input';
import SelectOption from '../../components/select';
import { fieldsOptionsToEdit } from '../../utils/data';

const CountryDetails: React.FC = (): any => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [editData, setEditData] = useState({
    field: '',
    value: '',
    country: '',
  });
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countrySelected, countryDetails } = useSelector((state: AppState) => state.country);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsEdit(false);
  }, [countrySelected]);

  useEffect(() => {
    if (!isEdit) {
      setEditData({
        field: '',
        value: '',
        country: '',
      });
    } else {
      setEditData({
        ...editData,
        country: countrySelected.ISO_A2,
      });
    }
  }, [isEdit]);

  useEffect(() => {
    setDisabled(_.isEmpty(editData.field) || _.isEmpty(editData.value));
  }, [editData]);

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

  const handleUpdateCountry = async () => {
    try {
      setLoading(true);
      await updateCountryDetails(
        editData.country, 
        {
          Campo: editData.field, 
          Valor: editData.value
        }
      );
      setIsEdit(false);
    } catch (error) {
      window.scrollTo(0, 0);
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

  const handleFieldSelection = (event: any) => {
    setEditData({ ...editData, field: event.target.value });
  };

  return (
    <Container>
      <Header />
      <ContentContainer width={width}>
        <TopContainer>
          <NameContainer>
            <Name width={width}>{getPTBRCountryName(countrySelected.NAME)}</Name>
            <Flag code={countrySelected.ISO_A2} height="40" width="40" />
          </NameContainer>
          {!isEdit && (
            <Button
              label="Editar"
              onClick={() => setIsEdit(true)}
              backgroundColor={colors.orange}
              color={colors.white}
              border={colors.orange}
            />
          )}
        </TopContainer>

        {isEdit ? (
          <>
            <SelectOption
              value={editData.field}
              isObrigatory
              placeholder="Campo"
              options={fieldsOptionsToEdit}
              handleChange={handleFieldSelection}
            />
            <Input
              testID="value"
              type="text"
              placeholder="Valor"
              value={editData.value}
              onChange={(v) => {
                setEditData({ ...editData, value: v });
              }}
              isObrigatory
            />
            <BottomContainer width={width}>
              <Button
                label="Cancelar"
                onClick={() => setIsEdit(false)}
                backgroundColor={colors.grey050}
                color={colors.black}
                border={colors.grey200}
              />
              <Button
                label="Enviar modificação"
                onClick={handleUpdateCountry}
                backgroundColor={colors.orange}
                color={colors.white}
                border={colors.orange}
                disabled={disabled}
              />
            </BottomContainer>
          </>
        ) : (
          <>
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
            {countryDetails?.localizacao?.regiao?.nome && (
              <InfoCountry title="Região" label={countryDetails.localizacao.regiao.nome} />
            )}
            {countryDetails?.localizacao?.subRegiao?.nome && (
              <InfoCountry title="Sub-região" label={countryDetails.localizacao.subRegiao.nome} />
            )}
            {countryDetails?.localizacao?.regiaoIntermediaria?.nome && (
              <InfoCountry title="Região intermediária" label={countryDetails.localizacao.regiaoIntermediaria.nome} />
            )}
            {countryDetails?.linguas?.length > 0 && (
              <InfoCountry title="Línguas" label={showArrayStrings(countryDetails.linguas)} />
            )}
            {countryDetails?.moedas?.length > 0 && (
              <InfoCountry title="Moedas" label={showArrayStrings(countryDetails.moedas)} />
            )}
            <MapChart setTooltipContent={setContent} highlighted={countrySelected?.ISO_A2} onClick={handleSetCountry} />
          </>
        )}
      </ContentContainer>
      <ReactTooltip>{content}</ReactTooltip>
    </Container>
  );
};

export default CountryDetails;
