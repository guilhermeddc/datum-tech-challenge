import {gql} from '@apollo/client';

export interface IAllCountries {
  Country: {
    name: string;
    capital: string;
    flag: {
      svgFile: string;
    };
  };
}

export const ALL_COUNTRIES = gql`
  {
    Country {
      name
      capital
      flag {
        svgFile
      }
    }
  }
`;
