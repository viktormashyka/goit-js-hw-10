export { fetchCountries };

function fetchCountries(searchCountry) {
  const url = `https://restcountries.com/v3.1/name/${searchCountry}/?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
