import {ThunkAction} from 'redux-thunk';

import storeType from './storeType';
import {getCountriesAction} from './actionTypes';

export type getCountriesActionCreator = () => ThunkAction<
  void,
  storeType,
  {},
  getCountriesAction
>;
