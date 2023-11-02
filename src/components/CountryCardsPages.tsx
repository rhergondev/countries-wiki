import { useState, useEffect } from "react";
import { Country } from "../data/types";
import { CountryCard } from "./CountryCard";
import { useCountriesContext } from "./contexts/CountriesContext";
import { PagesNavigation } from "./PagesNavigation";

import { Link } from "react-router-dom";

interface propList {
  className?: string;
  itemsPerPage: number;
}

export function CountryCardsPages({ className, itemsPerPage }: propList) {
  const countriesContext = useCountriesContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsInPage, setItemsInPage] = useState<Country[]>([]);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedArray = countriesContext?.countries?.slice(
      startIndex,
      endIndex
    );
    if (slicedArray) {
      setItemsInPage(slicedArray);
    }
  }, [currentPage, countriesContext?.countries, itemsPerPage]);

  return (
    <div className={`flex flex-col gap-8 items-center ${className}`}>
      <PagesNavigation
        itemsPerPage={itemsPerPage}
        dataLength={
          countriesContext?.countries ? countriesContext.countries.length : 0
        }
        currentPage={currentPage}
        setCurrentPage={changePage}
      />
      <div
        className={`grid grid-cols-4 content-center justify-center shrink-0 gap-18 mb-12`}
      >
        {itemsInPage.length > 0 ? (
          itemsInPage.map((country: Country) => (
            <Link key={country.cca3} to={`/country/${country.cca3}`}>
              <CountryCard
                key={country.cca3}
                className="rounded-md bg-white min-w-68 w-68 h-96 overflow-hidden shadow-lg shadow-gray-100"
                countryData={country}
              />
            </Link>
          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}
