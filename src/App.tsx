import { CountryCardsPages } from "./components/CountryCardsPages";
import { HeaderContainer } from "./components/HeaderContainer";
import { SearchBar } from "./components/SearchBar";
import { FilterSelector } from "./components/FilterSelector";
import { CountriesProvider } from "./components/contexts/CountriesContext";

import { Route, Routes } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";

export function App() {
  return (
    <>
      <HeaderContainer className="flex justify-between items-center h-14 bg-white px-20 shadow-md shadow-gray-100" />
      <CountriesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="px-40 mt-12 flex flex-col items-center">
                <div className="w-[1280px] flex justify-between relative">
                  <SearchBar className="h-14 w-120 rounded-md shadow-lg shadow-gray-100 font-light text-sm" />
                  <FilterSelector
                    containerClassName="w-52 gap-2 absolute z-10 right-0"
                    headerClassName="bg-white rounded-md shadow-md shadow-gray-100 w-full h-14 text-left px-6"
                    elementContainerClassName="z-10 gap-2 bg-white py-2 shadow-md rounded-md shadow-gray-100"
                    elementClassName="bg-white w-full text-left px-6 h-8"
                  />
                </div>
                <CountryCardsPages
                  className="w-[1280px] mb-12 mt-8"
                  itemsPerPage={8}
                />
              </div>
            }
          />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </CountriesProvider>
    </>
  );
}
