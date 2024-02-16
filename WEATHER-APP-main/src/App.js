import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent'

const API_KEY = '771ad7cb9f3c9eccc7b2d54cba426ea8';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  align-items:center;
  box-shadow:0 2px 4px #555;
  padding:1.25rem 0.75rem;
  border-radius:0.25rem;
  width:380px;
  background:white;
  font-family:Montserrat;

  @media (max-width:500px) {
    width: 280px;
  }

  &:hover {
    box-shadow:0 3px 6px #555;
    transition: 0.3s linear all;
  }
`;
const AppLabel = styled.span`
  color:black;
  font-size:1rem;
  font-weight:bold;
`;
const ErrorLable = styled.p`
height: 1.5rem;
display: grid;
align-items: center;
text-align: center;
font-size: 0.75rem;
border-radius: 0.25rem;
text-transform: capitalize;
color: #721c24;
background: #f8d7da;
padding:0.4rem;
width:80%;
font-weight:bold;
`;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setIsError(false);
      setWeather(response.data);
    } catch (err) {
      if (!err.message.includes('200')) {
        setIsError(true);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsError(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isError]);

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent
          weather={weather}
          setWeather={setWeather}
          setCity={setCity}
        />
      ) : (
        <CityComponent
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        />
      )}
      {isError ? <ErrorLable>please enter correct city name</ErrorLable> : ''}
    </Container>
  );
}

export default App;