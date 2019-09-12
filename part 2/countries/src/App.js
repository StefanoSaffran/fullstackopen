import React, { useState, useEffect } from 'react';
import './App.css';

import Country from './components/Country';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => setCountries(res.data))
  }, [])


  const handleFilter = event => {
    setFilter(event.target.value);
  }

  let filteredCountries = filter ?
    countries.filter(country => {
      let regex = new RegExp(filter, "i")
      return regex.test(country.name);
    })
    : '';

  console.log(filteredCountries)
  if (filteredCountries.length > 10) filteredCountries = 'Too many matches, specify another filter';
  else if (filteredCountries.length > 1) filteredCountries = filteredCountries.map((country) => {
    console.log(country);
    return (
      <div key={country.name}>
        {country.name} <br />
      </div>
    )
  })
  else if (filteredCountries.length === 1) filteredCountries = filteredCountries.map((country) => <Country key={country.name} country={country} />)


  return (
    <>
      <div>
        find countries <input onChange={handleFilter} />
      </div>
      {filteredCountries}
    </>
  );
}

export default App;
