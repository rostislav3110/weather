import { createContext, useContext,  useState } from "react";
import { WEATHER_URL } from "./weather_api";

const AppContent = createContext();

export const useApp = () => {
  return useContext(AppContent);
};

export const AppProvider = ({ children }) => {
  const [weatherState, setWeather] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherIndex, setWeatherIndex] = useState(0);

  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";
    try {
      const response = await fetch(
        `${WEATHER_URL.start_url}${objValue[1]}?${WEATHER_URL.api_url}&q=${searchValue}&aqi=yes&lang=uk&${objValue[2]}`
      );
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  function toogleTheme() {
    setIsDarkMode(!isDarkMode);
  }


  const updateWeatherState = (newIndex) => {
    setWeatherIndex(newIndex);
  };

  

  return (
    <AppContent.Provider
      value={{
        weatherState,
        isDarkMode,
        toogleTheme,
        getWeatherData,
        weatherIndex,
        updateWeatherState
      }}
    >
      {children}
    </AppContent.Provider>
  );
};
