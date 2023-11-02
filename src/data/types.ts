export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: NativeNameData;
  };
  tld: string[];
  cca3: string;
  currencies: CurrenciesData;
  capital: string;
  region: string;
  subregion: string;
  languages: LanguageData;
  borders: string[];
  population: string;
}

interface LanguageData {
  [key: string]: string;
}

interface NativeNameData {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface CurrenciesData {
  [key: string]: {
    name: string;
    symbol: string;
  };
}
