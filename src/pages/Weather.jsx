import React from "react";
import ForecastLocation from "../components/ForecastLocation";
import BarChart from "../components/BarChart";
import Header from "../components/header";

export default function Weather() {
  return (
    <div className="main_container">
      <Header />
      <div className="forecast_container">
        <ForecastLocation  />
      </div>
      <div className="chart_container">
        <BarChart />
      </div>
    </div>
  );
}
