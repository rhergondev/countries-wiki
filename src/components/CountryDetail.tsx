import { useParams } from "react-router-dom";

import { useCountriesContext } from "./contexts/CountriesContext";

import { CountryDetailContainer } from "./CountryDetailContainer";

export function CountryDetail() {
  const { id } = useParams();
  const countriesContext = useCountriesContext();
  let countryData;
  if (id) {
    countryData = countriesContext?.getDataById(id);
  }
  return (
    <div>
      <button>back</button>
      <div className="flex gap-24">
        <img
          className="w-[560px] h-[400px] rounded-md"
          src={countryData?.flags.svg}
          alt={countryData?.flags.alt}
        ></img>
        {countryData ? (
          <CountryDetailContainer countryData={countryData} />
        ) : (
          <p>Data not loaded</p>
        )}
      </div>
    </div>
  );
}
