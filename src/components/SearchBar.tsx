import { useCountriesContext } from "./contexts/CountriesContext";

interface propList {
  className?: string;
}

export function SearchBar({ className }: propList) {
  const countriesContext = useCountriesContext();

  const filterCardsByName = (event) => {
    countriesContext?.filterByName(event.target.value);
  };
  return (
    <div
      className={` bg-white flex items-center gap-6 text-lm-dark-gray ${className}`}
    >
      <p className="material-symbols-outlined ml-8">search</p>
      <input
        className="focus:outline-none"
        type="text"
        placeholder="Search for a country..."
        onChange={filterCardsByName}
      />
    </div>
  );
}
