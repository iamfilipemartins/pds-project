import { useEffect, useState } from 'react';
import { countryNames } from './data';

export const getPTBRCountryName = (name: string): string => {
  return countryNames.find((country: any) => country.nome_pais_int === name)?.nome_pais || name;
};

export const colors = {
  blue: '#1E40AF',
  background: '#F4F4F4',
  grey300: '#CBD5E1',
  grey400: '#94A3B8',
  grey500: '#64748B',
  grey800: '#1E293B',
  orange: '#DF5413',
  textColor: '#3F3F46',
  white: '#FFFFFF',
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

export default getPTBRCountryName;
