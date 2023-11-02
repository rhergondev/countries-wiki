import { useEffect, useState } from "react";
import { useCountriesContext } from "../contexts/CountriesContext";

interface propList {
  className?: string;
  elementText: string;
  elementValue: string;
  resetLive: () => void;
}

export function DropDownElement({
  className,
  elementText,
  elementValue,
  resetLive,
}: propList) {
  const countriesContext = useCountriesContext();
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(elementValue);
  }, [elementValue]);

  const updateFilter = () => {
    countriesContext?.filterByRegion(value);
    resetLive();
  };

  return (
    <button className={className} onClick={updateFilter}>
      {elementText}
    </button>
  );
}
