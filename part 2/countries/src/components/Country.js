import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = props => {
    const [weather, setWeather] = useState([]);
    const { name } = props.country;

    useEffect(() => {
        console.log(name);
        const params = {
            access_key: '94aa904bba935c41840e63f6cb54d157',
            query: name
        }

        axios
            .get('http://api.weatherstack.com/current', { params })
            .then(res => setWeather(res.data))
            .catch(err => console.log(err));
    }, []);

    console.log(weather);

    const temp =
        weather.length !== 0 ?
            <>
                <label><strong>temperature: </strong>{weather.current.temperature} Celsius</label> <br/>
                <img className="weather-icon" src={weather.current.weather_icons[0]} alt="weather icon" height="50" width="50"></img> <br/>
                <label><strong>wind: </strong>{weather.current.wind_speed} kph direction {weather.current.wind_dir}</label>
            </>
        :
            '';

    const languages = props.country.languages.map(language => <li key={language.name}>{language.name}</li>)

    return (
        <>
            <h1>{props.country.name}</h1>
            <label>capital {props.country.capital}</label> <br />
            <label>population {props.country.population}</label>
            <h3>languages</h3>
            <ul>
                {languages}
            </ul>
            <img src={props.country.flag} alt="Country's flag" height="100" width="120"></img>
            <h3>Weather in {name}</h3>
            {temp}
        </>
    );
};

export default Country;