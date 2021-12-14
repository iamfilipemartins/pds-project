/* eslint-disable no-useless-escape */
import { useEffect, useState } from 'react';
import { countryNames } from './data';

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

export const validateEmail = (emailAdress: string) : boolean => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } 
  return false; 
}

export const onlyNumbers = (value: string) : string => value.replace(/\D/g, "");

export const onlyLetters = (value: string) : string => value.replace(/[^a-zA-Z]+/g, "");

export const addDataIntoCache = (cacheName: string, response: any) : any => {
  // Converting our respons into Actual Response form
  const data = new Response(JSON.stringify(response));

  if ('caches' in window) {
    // Opening given cache and putting our data into it
    caches.open(cacheName).then((cache) => {
      cache.put('http://localhost:3000/pds-project/', data);
    });
  }
};

export const deleteSpecificCache = (cacheName: string) : any => {
  if ("caches" in window) {
    caches.delete(cacheName).then((res) => {
      return res;
    });
  }
};

export const getCacheData = async (name: string) => {
  const url = 'http://localhost:3000/pds-project/'
    
  // Opening that particular cache
  const cacheStorage = await caches.open(name);

  // Fetching that particular cache data
  const cachedResponse = await cacheStorage.match(url);
  const data = cachedResponse ? await cachedResponse.json() : [];

  return data;
};

export default getPTBRCountryName;
