import {ADD_COUNTRIES} from './actionTypes';
import {ICountry} from '../types/storeType';

export const addCountries = (payload: ICountry) => ({
  type: ADD_COUNTRIES,
  payload,
});
