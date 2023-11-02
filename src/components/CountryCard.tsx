import { Card } from "./cardComponents/Card";
import { CardImg } from "./cardComponents/CardImg";
import { CardHeader } from "./cardComponents/CardHeader";
import { CardContentLine } from "./cardComponents/CardContentLine";
import { Country } from "../data/types";

interface propList {
  className?: string;
  countryData: Country;
}

export function CountryCard({ className, countryData }: propList) {
  return (
    <Card className={className}>
      <CardImg
        className="object-center h-40 w-full shadow shadow-slate-50 scroll-0"
        imgUrl={countryData.flags.png}
        imgAlt={countryData.flags.alt}
      />
      <CardHeader
        header={countryData.name.official}
        className="text-lg m-6 font-extrabold"
      />
      <div className="m-6 flex flex-col gap-2">
        <CardContentLine
          className="text-sm font-light"
          contentTitle="Population:"
          content={parseInt(countryData.population).toLocaleString("en-US")}
        />
        <CardContentLine
          className="text-sm font-light"
          contentTitle="Region:"
          content={countryData.region}
        />
        <CardContentLine
          className="text-sm font-light"
          contentTitle="Capital:"
          content={countryData.capital}
        />
      </div>
    </Card>
  );
}
