import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MapChart from '../map/MapChart';
import { ICountryMapData, setCountryDetails, setCountrySelected } from '../../redux/actions/countryActions';
import Header from '../../components/header';
import Container, { BodyContainer, ItemsHomeContainer, LoadingContainer } from './styles';
import ItemHome from '../../components/itemHome';
import { AppState } from '../../redux/reducers/rootReducer';
import getCountryDetails from './services';
import { COUNTRY_DETAILS_INITIAL_STATE } from '../../redux/reducers/countryReducer';
import { colors } from '../../utils';
import Loading from '../../utils/svg/components/loading';

const Home : React.FC = (): any => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    if (_.isEmpty(user.login)) {
      navigate('/login', { replace: true });
    }
  }, []);

  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  const handleSetCountrySelected = async (countrySelectedOnMap: ICountryMapData) => {
    try {
      setLoading(true);
      await dispatch(setCountrySelected(countrySelectedOnMap));
      const response = await getCountryDetails(countrySelectedOnMap.ISO_A2);
      if (response) {
        await dispatch(setCountryDetails(response));
        setLoading(false);
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
        <MapChart setTooltipContent={setContent} onClick={handleSetCountrySelected} />
        <ReactTooltip>{content}</ReactTooltip>
      </BodyContainer>
    </Container>
  );
};

export default Home;
