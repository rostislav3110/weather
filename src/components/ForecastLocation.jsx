import React from "react";
import localstyle from "../style/weatherlocation.module.css";
import image from "../assets/Sunny.png";

function ForecastLocation() {
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
  });
  const currentTime = new Date().toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="forecastLoction_container">
      {/* <div className="filters">
        <h3>Today, Tomorrow, Next 7 days</h3>
        <div className="days">
          <button>Forecast</button>
          <button>Air Quality</button>
        </div>
      </div> */}
      

      <div className={localstyle.weather_info}>
        <div className={localstyle.date_time}>
          <span className={localstyle.date}>{currentDate}</span>
          <span className={localstyle.time}>{currentTime}</span>
        </div>
        <div className={localstyle.info_menu}>
          <div className={localstyle.temperature}>
            <span className={localstyle.value}>5°</span>
            <img
              src={image}
              className={localstyle.weather_icon}
              alt="weather icon"
            />
          </div>
          <span className={localstyle.real_feel}>Real Feel: 15°</span>
          <div className={localstyle.wind}>
            <span className={localstyle.wind_speed}>Wind N-E:25 km/h</span>
          </div>
          <div className={localstyle.sunrise_sunset}>
            <span className={localstyle.sunrise}>Sunrise: 5:30 </span>
            <span className={localstyle.sunset}>Sunset:6:40 </span>
          </div>
          <div className={localstyle.pressure_humidity}>
            <span className={localstyle.pressure}>Pressure: 100MB</span>
            <span className={localstyle.humidity}>Humidity: 51%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastLocation;
