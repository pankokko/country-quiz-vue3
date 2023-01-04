export const fetchCountries = async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/region/ame?fields=name,flags"
  );
  return await response.json();
};

export const fetchCountry = async (name: string): Promise<Object> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,flags,currencies,population`
  );
  const a = await response.json();
  return a[0];
};
