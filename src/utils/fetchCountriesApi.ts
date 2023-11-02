export async function fetchCountriesApi() {
  const fetchData = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,tld,capital,population,region,subregion,flags,cca3,languages,currencies,borders",
    {
      method: "GET",
    }
  );
  const countryData = await fetchData.json();
  console.log(countryData);
  return countryData;
}
