import React from "react";
import localstyle from "../style/weatherlocation.module.css";
import { useApp } from "../utils/context";

function CurrentForecast() {
  const { weatherState } = useApp();

  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
  });
  const currentTime = new Date().toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="forecastLoction_container">
      

      <div className={localstyle.weather_info}>
        <div className={localstyle.date_time}>
          <span className={localstyle.date}>{currentDate}</span>
          <span className={localstyle.time}>{currentTime}</span>
        </div>
        <div className={localstyle.info_menu}>
          <div className={localstyle.temperature}>
            <span className={localstyle.value}>
              {Math.round(weatherState.current?.temp_c)}°
            </span>
            <img
              src={weatherState.current?.condition.icon}
              className={localstyle.weather_icon}
              alt="weather icon"
            />
          </div>

          <div className={localstyle.wind}>
            <span className={localstyle.real_feel}>
              Real Feel: {Math.round(weatherState.current?.feelslike_c)}°
            </span>
            <span className={localstyle.wind_speed}>
              Wind N-E: {Math.round(weatherState.current?.wind_kph)}km/h
            </span>
          </div>
          <div className={localstyle.pressure_humidity}>
            <span className={localstyle.pressure}>
              Pressure: {weatherState.current?.pressure_mb}MB
            </span>
            <span className={localstyle.humidity}>
              Humidity: {weatherState.current?.humidity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentForecast;
