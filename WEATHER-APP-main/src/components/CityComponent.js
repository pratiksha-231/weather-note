import React from 'react';
import styled from 'styled-components';

const WeatherLogo = styled.img`
  width:140px;
  height:140px;
  margin:40px auto;
`;

const ChooseCityLabel = styled.span`
color:black;
font-size:1rem;
font-weight:bold;
margin:10px auto;
text-transform:capitalize;
`;
const SearchBox = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size:1rem;
font-weight:bold;
margin:20px auto;

& input{
  padding:0.5rem;
  font-size:1rem;
  border:none;
  outline:none
  font-weight:bold;
}

& button{
  padding:0.5rem;
  font-size:1rem;
  border:none;
  outline:none;
  color:white;
  background:black;
  display:block;
  cursor:pointer;
  text-transform:capitalize;
}

@media screen and (max-width:400px){
  margin:15px auto;
  justify-content:space-between;

  & input{
    flex-grow:1;
    width:70%;
  }

  & button{
    align-self:flex-end;
    width:30%;
  }

}

`;

const CityComponent = ({ city, setCity, fetchWeather }) => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" alt="perfect-day" />
      <ChooseCityLabel>find weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
