export type ICountryRedux = {
  name: string;
  flag: string;
  capital: string;
};

export type ICountryApollo = {
  name: string;
  flag: {
    svgFile: string;
  };
  capital: string;
};
