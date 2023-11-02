import {
  useContext,
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchCountriesApi } from "../../utils/fetchCountriesApi";
import { Country } from "../../data/types";

interface CountriesContextType {
  countries: Country[] | undefined;
  getDataById: (id: string) => Country;
  getNameById: (id: string) => string;
  filterByName: (name: string) => void;
  filterByRegion: (region: string) => void;
  headerFilterText: string;
}

interface CountriesProviderProps {
  children: ReactNode;
}

const CountriesContext = createContext<CountriesContextType | null>(null);

export function useCountriesContext() {
  return useContext(CountriesContext);
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({
  children,
}) => {
  const [retrievedData, setRetrievedData] = useState<Country[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [headerFilterText, setHeaderFilterText] = useState("");

  const filterByName = (name: string) => {
    setNameFilter(name);
  };

  const filterByRegion = (region: string) => {
    setRegionFilter(region);
  };

  const getDataById = (id: string) => {
    const countryData = retrievedData.find((country) => country.cca3 === id);
    try {
      if (countryData) {
        return countryData;
      } else {
        throw new Error(`No data found for ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNameById = (id: string) => {
    const countryData = retrievedData.find((country) => country.cca3 === id);
    try {
      if (countryData) {
        return countryData.name.common;
      } else {
        throw new Error(`No data found for ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function importData() {
      try {
        const countriesAPIExport = await fetchCountriesApi();
        setRetrievedData(countriesAPIExport);
      } catch (error) {
        console.error(`Error moving data to React State: ${error}`);
      }
    }
    importData();
  }, []);

  useEffect(() => {
    if (retrievedData) {
      setCountries(retrievedData);
    }
  }, [retrievedData]);

  useEffect(() => {
    const filteredData = retrievedData.filter((country: Country) => {
      const regionFilterCheck =
        !regionFilter || country.region === regionFilter;

      const nameFilterCheck =
        !nameFilter ||
        country.name.official
          .toLowerCase()
          .includes(nameFilter.toLowerCase()) ||
        country.name.common.toLowerCase().includes(nameFilter.toLowerCase());

      return regionFilterCheck && nameFilterCheck;
    });
    setCountries(filteredData);
    setHeaderFilterText(regionFilter);
  }, [regionFilter, nameFilter, retrievedData]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        getDataById,
        getNameById,
        filterByName,
        filterByRegion,
        headerFilterText,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
