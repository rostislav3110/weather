import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import headerstyle from "../style/header.module.css";
import React, { useState, useEffect } from "react";
import { WEATHER_URL } from "../utils/weather_api";
import { useApp } from "../utils/context";
import Login from "../utils/auth/login";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

export default function Header() {
  const { toogleTheme } = useApp();
  const { weatherState, getWeatherData } = useApp();
  const [weather, setWeather] = useState(weatherState);
  const [inputValue, setInputValue] = useState("");

 

  const forecastData = async () => {
    try {
      const result = await getWeatherData(
        inputValue,
        WEATHER_URL.forecast_path,
        "days=5&aqi=no&alerts=no"
      );
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    forecastData();
  }, []);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    forecastData();
  }

  
 

  return (
    <header>
      <div className={headerstyle.container}>
        <div className={headerstyle.Menu}>
          <SnackbarProvider/>
          <button onClick={() => enqueueSnackbar("Sorry, don't working menu!")} className={headerstyle.button_grid}>
            <GridViewIcon />
          </button>
          <button onClick={() => enqueueSnackbar("Sorry, don't working notification!")} className={headerstyle.button_ntf}>
            <NotificationsIcon />
          </button>
          <div className={headerstyle.location}>
            <LocationOnIcon />
            <h3 className={headerstyle.city}>
              {weather.location &&
                `${weather.location.name}, ${weather.location.country}`}
            </h3>
          </div>
        </div>
        <form onSubmit={onFormSubmit}>
          <div className={headerstyle.group}>
            <svg
              className={headerstyle.icon}
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search city"
              type="search"
              className={headerstyle.input}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className={headerstyle.profile}>
          <label className={headerstyle.switch}>
            <input type="checkbox" onChange={toogleTheme} />
            <span className={headerstyle.slider}></span>
          </label>
          <Login />
        </div>
      </div>
    </header>
  );
}
