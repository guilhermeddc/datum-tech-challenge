import {gql} from '@apollo/client';

export const LOAD_COUNTRIES = gql`
  query {
    Country {
      _id
      name
      capital
      flag {
        svgFile
      }
    }
  }
`;

export const LOAD_COUNTRY = gql`
  query Country($_id: String!) {
    Country(_id: $_id) {
      _id
      name
      area
      population
      capital
      topLevelDomains {
        name
      }
      location {
        latitude
        longitude
      }
      flag {
        emoji
        emojiUnicode
        svgFile
      }
    }
  }
`;
