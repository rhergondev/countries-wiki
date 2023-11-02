import { useCountriesContext } from "./contexts/CountriesContext";
import { DropDown } from "./dropdownComponents/DropDown";

interface propList {
  containerClassName?: string;
  headerClassName?: string;
  elementContainerClassName?: string;
  elementClassName?: string;
}

export function FilterSelector({
  containerClassName,
  headerClassName,
  elementContainerClassName,
  elementClassName,
}: propList) {
  const countriesContext = useCountriesContext();
  const elementsArray = [
    { text: "World", value: "" },
    { text: "Africa", value: "Africa" },
    { text: "Americas", value: "Americas" },
    { text: "Asia", value: "Asia" },
    { text: "Europe", value: "Europe" },
    { text: "Oceania", value: "Oceania" },
  ];

  return (
    <DropDown
      className={containerClassName}
      headerClassName={headerClassName}
      elementClassName={elementClassName}
      elementContainerClassName={elementContainerClassName}
      header={countriesContext?.headerFilterText || "Filter by region"}
      elementList={elementsArray}
    />
  );
}
