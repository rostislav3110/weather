import React, { useState, useEffect } from 'react';
import { useApp } from "../utils/context";

function HourlyForecast() {
  const { weatherState, weatherIndex } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (weatherState) {
      // Set isVisible to true after a short delay to trigger animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // Clean up timer
      return () => clearTimeout(timer);
    }
  }, [weatherState]); // Make sure to include dependencies in the dependency array

  if (!weatherState) {
    return null;
  }

  const forecastData = weatherState.forecast?.forecastday[weatherIndex].hour;
  // const date = weatherState.forecast?.forecastday[weatherIndex].date;

  const formattedTime = (time) => {
    return new Date(time).toLocaleTimeString([]);
  };

  return (
    <div
      className={`${"container"} ${"current_container"}`}
      style={{
        height: "auto",
        width: "41vw",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginLeft: "39px",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
        cursor: "pointer"
      }}
    >
      <ul style={{ display: "flex", width: "100px", listStyle: "none", padding: "0", margin: "0" }}>
        {forecastData?.map((item, index) => (
          <li
            key={index}
            style={{
              width: "100px",
              backgroundColor: "grey",
              marginRight: "1vw",
              borderRadius: "30px",
              padding: "35px 23px",
              height: "220px",
              display: "flex",
              flexDirection:"column",
              alignItems: "center",
              justifyContent:"space-between",
              opacity: isVisible ? 1 : 0, // Opacity controlled by isVisible state
              transition: "opacity 0.5s ease-in-out", // Smooth transition
            }}
          >
            <p style={{ fontSize: "18px" }}>{formattedTime(item.time)}</p>
            <hr style={{width: "100%"}}/>
            <img
              src={item.condition.icon}
              alt={item.condition.text}
              style={{ width: "50px" }}
            />
  
            <p
              style={{
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              {Math.round(item.temp_c)}°C
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HourlyForecast;