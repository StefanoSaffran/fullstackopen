import React from 'react';

const Country = ({ country }) => {

    const languages = country.languages.map(language => <li key={language.name}>{language.name}</li>)
    return (
        <>
            <h1>{country.name}</h1>
            <label>capital {country.capital}</label> <br/>
            <label>population {country.population}</label>
            <h2>languages</h2>
            <ul>
                {languages}
            </ul>
            <img src={country.flag} alt="Country's flag" height="100" width="100"></img>
        </>
    );
};

export default Country;