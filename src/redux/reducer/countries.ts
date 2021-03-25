import {Reducer} from 'redux';
import axios from 'axios';

import {getCountriesAction} from '../types/actionTypes';
import {ICountry} from '../types/storeType';
import {ADD_COUNTRIES} from '../actions/actionTypes';
import {addCountries} from '../actions';

const INITIAL_STATE: ICountry[] = [];

export const getCountries = () => async (dispatch: any) => {
  const countries = await axios.get('https://restcountries.eu/rest/v2/all');
  dispatch(addCountries(countries.data));
};

const countriesReducer: Reducer<ICountry[], getCountriesAction> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
