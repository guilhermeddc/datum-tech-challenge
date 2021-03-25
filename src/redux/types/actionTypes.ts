import {ICountry} from './storeType';

export interface getCountriesAction {
  type: string;
  payload: ICountry[];
}
