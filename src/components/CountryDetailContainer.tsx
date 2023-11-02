import { Country } from "../data/types";
import { useCountriesContext } from "./contexts/CountriesContext";
import { Link } from "react-router-dom";

interface propList {
  countryData: Country;
}

export function CountryDetailContainer({ countryData }: propList) {
  const countriesContext = useCountriesContext();

  const langKey = Object.keys(countryData.languages);
  const countryCurrencies = Object.keys(countryData.currencies);
  return (
    <div className="self-center">
      <h1 className=" font-extrabold text-[2rem]">
        {countryData.name.official}
      </h1>
      <div className="flex gap-24 mt-6">
        <div className="flex flex-col gap-2">
          <p className=" font-thin">
            <span className=" font-semibold">Native Name: </span>
            {countryData.name.nativeName[langKey[0]].official}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Population: </span>
            {parseInt(countryData.population).toLocaleString("en-US")}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Region: </span>
            {countryData.region}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Sub Region: </span>
            {countryData.subregion}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Capital: </span>
            {countryData.capital}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" font-thin">
            <span className=" font-semibold">Top Level Domain: </span>
            {countryData.tld}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Currencies: </span>
            {countryCurrencies
              .map((e) => countryData.currencies[e].name)
              .join(", ")}
          </p>
          <p className=" font-thin">
            <span className=" font-semibold">Languages: </span>
            {langKey.map((e) => countryData.languages[e]).join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-24 flex gap-4">
        <h2>Border Countries</h2>
        {countryData.borders.map((e) => (
          <Link key={e} to={`/country/${e}`}>
            <button>{countriesContext?.getNameById(e)}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
