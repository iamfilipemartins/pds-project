/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-escape */
import { useEffect, useState } from 'react';
import { countryNames } from './data';
import ac from './svg/flags/ac.svg';
import ad from './svg/flags/ad.svg';
import ae from './svg/flags/ae.svg';
import af from './svg/flags/af.svg';
import ag from './svg/flags/ag.svg';
import ai from './svg/flags/ai.svg';
import al from './svg/flags/al.svg';
import am from './svg/flags/am.svg';
import ao from './svg/flags/ao.svg';
import aq from './svg/flags/aq.svg';
import ar from './svg/flags/ar.svg';
import as from './svg/flags/as.svg';
import at from './svg/flags/at.svg';
import au from './svg/flags/au.svg';
import aw from './svg/flags/aw.svg';
import ax from './svg/flags/ax.svg';
import az from './svg/flags/az.svg';
import ba from './svg/flags/ba.svg';
import bb from './svg/flags/bb.svg';
import bd from './svg/flags/bd.svg';
import be from './svg/flags/be.svg';
import bf from './svg/flags/bf.svg';
import bg from './svg/flags/bg.svg';
import bh from './svg/flags/bh.svg';
import bi from './svg/flags/bi.svg';
import bj from './svg/flags/bj.svg';
import bl from './svg/flags/bl.svg';
import bm from './svg/flags/bm.svg';
import bn from './svg/flags/bn.svg';
import bo from './svg/flags/bo.svg';
import bq from './svg/flags/bq.svg';
import br from './svg/flags/br.svg';
import bs from './svg/flags/bs.svg';
import bt from './svg/flags/bt.svg';
import bv from './svg/flags/bv.svg';
import bw from './svg/flags/bw.svg';
import by from './svg/flags/by.svg';
import bz from './svg/flags/bz.svg';

export const getPTBRCountryName = (name: string): string => {
  return countryNames.find((country: any) => country.nome_pais_int === name)?.nome_pais || name;
};

export const colors = {
  blue: '#1E40AF',
  background: '#F4F4F4',
  grey050: '#F8FAFC',
  grey200: '#E2E8F0',
  grey300: '#CBD5E1',
  grey400: '#94A3B8',
  grey500: '#64748B',
  grey800: '#1E293B',
  mapItem: '#bebab8',
  orange: '#DF5413',
  textColor: '#3F3F46',
  white: '#FFFFFF',
  black: '#000000',
};

const getWindowDimensions = (): any => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = (): any => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export const validateEmail = (emailAdress: string): boolean => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  }
  return false;
};

export const onlyNumbers = (value: string): string => value.replace(/\D/g, '');

export const onlyLetters = (value: string): string => value.replace(/[^a-zA-Z]+/g, '');

export const roundPopulation = (num: number) => {
  if (isNaN(num)) {
    return 'Dado populacional não encontrado';
  }

  const numTest = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (num > 1000000000) {
    return `${numTest} bilhões de habitantes`;
  }
  if (num > 1000000) {
    return `${numTest} milhões de habitantes`;
  }
  return `${numTest} mil habitantes`;
};

export const getFlag = (country: string): any => {
  switch (country.toLowerCase()) {
    case 'ac':
      return ac;
    case 'ad':
      return ad;
    case 'ae':
      return ae;
    case 'br':
      return br;
    default:
      return null;
  }
};

export default getPTBRCountryName;
