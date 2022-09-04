import { Notify } from 'notiflix';

export { fetchCountries };

function fetchCountries(searchCountry) {
  const url = `https://restcountries.com/v3.1/name/${searchCountry}/?fields=name,capital,population,flags,languages`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      //   console.log(response);
      return response.json();
    })
    .then(data => {
      // Data handling
      //   console.log(data);
      if (data.length > 10) {
        console.log(
          'Too many matches found. Please enter a more specific name.'
        );
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        console.log('data > 10', data);
      }
      if (data.length >= 2 && data.length <= 10) {
        for (let index = 0; index < data.length; index += 1) {
          const element = data[index];
          console.log(data[index].name.official);
          console.log(data[index].flags.svg);
          console.log('data > 2 and < 10', data);
        }
      }
      if (data.length === 1) {
        console.log(data[0].name.official);
        console.log(data[0].capital);
        console.log(data[0].population);
        console.log(data[0].flags.svg);
        console.log(data[0].languages);
        console.log('data = 1', data);
      }
      // console.log(data);
      return data;
    })
    .catch(error => {
      // Error handling
      console.log(error);
      Notify.failure('Oops, there is no country with that name');
    });
}
