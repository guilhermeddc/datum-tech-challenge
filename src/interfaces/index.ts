export interface ICountries {
  _id: string;
  name: string;
  capital: string;
  flag: {
    svgFile: string;
  };
}

export interface ILoadCountries {
  Country: ICountries[];
}

export interface ICountry {
  _id: string;
  name: string;
  area: number;
  population: number;
  capital: string;
  topLevelDomains: Array<{
    name: string;
  }>;
  location: {
    latitude: number;
    longitude: number;
  };
  flag: {
    emoji: string;
    emojiUnicode: string;
    svgFile: string;
  };
}

export interface ILoadCountry {
  Country: Array<ICountry>;
}
