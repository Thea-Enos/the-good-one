import React from "react";
import moment from "moment-timezone";
import _ from "lodash";
import dummyData from "../../dummyWeatherData";
import Recommendations from "../Recommendations";

const convertKelvinToFarenheit = kelvinTemp =>
  ((kelvinTemp - 273.15) * 9) / 5 + 32;

const convertDtToMs = dtVal => dtVal * 1000;
const findFirstForecastAfterTime = (forecasts, compareTime) => {
  return forecasts.find(f => {
    const apiUnixTimestamp = convertDtToMs(f.dt);
    return moment(apiUnixTimestamp).isAfter(moment(compareTime));
  });
};

const Forecast = ({ zipCode, startTime, stopTime, coatMax, jacketMax }) => {
  const [hasRain, setHasRain] = React.useState(false);
  const [wearCoat, setWearCoat] = React.useState(false);
  const [wearJacket, setWearJacket] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const fetchWeatherData = async () => {
        const openWeatherApiKey = process.env.OPEN_WEATHER_KEY;
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${openWeatherApiKey}`;
        const response = await fetch(openWeatherUrl);
        const json = await response.json();
        return json;
      };

      // REAL
      const openWeatherData = await fetchWeatherData();
      //DUMMY
      //const openWeatherData = dummyData;

      const allForecasts = _.get(openWeatherData, "list", []);

      // First Forecast
      const firstAfterStartTime = findFirstForecastAfterTime(
        allForecasts,
        startTime
      );
      const firstAfterStartIndex = allForecasts.indexOf(firstAfterStartTime);
      const startIndex = firstAfterStartIndex - 1;

      // Last Forecast
      const firstAfterStopTime = findFirstForecastAfterTime(
        allForecasts,
        stopTime
      );
      const firstAfterStopIndex = allForecasts.indexOf(firstAfterStopTime);
      const stopIndex = firstAfterStopIndex - 1;

      // Forecasts to Heed
      const forecastsToConsider = allForecasts.filter(
        f =>
          allForecasts.indexOf(f) >= startIndex &&
          allForecasts.indexOf(f) <= stopIndex
      );
      console.log("forecastsToConsider");
      console.log(forecastsToConsider);

      const forecastsRain = forecastsToConsider.some(f => f.rain);
      setHasRain(forecastsRain);

      const feelsLikeTemps = forecastsToConsider.map(f => f.main.feels_like);

      const minFeelsLikeKelvin = Math.min(...feelsLikeTemps);
      const minFeelsLikeFarenheit = convertKelvinToFarenheit(
        minFeelsLikeKelvin
      );
      console.log(minFeelsLikeFarenheit);

      if (minFeelsLikeFarenheit < coatMax) {
        setWearCoat(true);
      } else if (minFeelsLikeFarenheit < jacketMax) {
        setWearJacket(true);
      }
    })();
  }, [zipCode, startTime, stopTime, coatMax, jacketMax]);

  return (
    <Recommendations
      hasRain={hasRain}
      wearJacket={wearJacket}
      wearCoat={wearCoat}
    />
  );
};

export default Forecast;
