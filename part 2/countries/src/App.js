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

  const handleClick = country => {

    setFilter(country.name);

  }

  let filteredCountries = filter ?
    countries.filter(country => {
      let regex = new RegExp(filter, "i")
      return regex.test(country.name);
    })
    : '';

  if (filteredCountries.length > 10) filteredCountries = 'Too many matches, specify another filter';
  else if (filteredCountries.length > 1) filteredCountries = filteredCountries.map((country) => {
    return (
      <div key={country.name}>
        {country.name} <button onClick={() => handleClick(country)} >show</button><br />
      </div>
    )
  })
  else if (filteredCountries.length === 1) filteredCountries = filteredCountries.map((country) => <Country key={country.name} country={country} />)

  return (
    <>
      find countries <input onChange={handleFilter} />
      {filteredCountries}
    </>
  );
}

export default App;
