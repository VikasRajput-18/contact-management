import axios from "axios";

export const fetchAllWorldCases = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/all");
  let allCases = response.data;

  return allCases;
};
export const fetchCountryCases = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  let countryCases = response.data;
  return countryCases;
};
export const fetchCasesWithDate = async () => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  let casesWithDate = response.data;
  return casesWithDate;
};
