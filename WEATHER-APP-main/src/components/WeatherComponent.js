import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/sunny.svg",
  "50n": "/icons/night.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.div`
  margin: 1.25 auto;
  font-size: 1rem;
  & span {
    font-size: 2rem;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const WeatherInfoLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 1.25rem 0.75rem;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;

  & button {
    border: none;
    outline: none;
    color: white;
    background: black;
    padding: 0.5rem;
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    margin-top: 0.5rem;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} alt="temp" />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = ({ weather, setWeather, setCity }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  console.log(weather?.wind);
  return (
    <>
      <WeatherCondition>
        <Condition>
          {" "}
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{" "}
          {`| ${weather?.weather[0].description}`}
        </Condition>

        <WeatherLogo
          src={WeatherIcons[weather?.weather[0].icon]}
          alt="perfect-day"
        />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>weather info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
      <BackButtonContainer>
        <button
          onClick={() => {
            setWeather("");
            setCity("");
          }}
        >
          go back
        </button>
      </BackButtonContainer>
    </>
  );
};

export default WeatherComponent;
