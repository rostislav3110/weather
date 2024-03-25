import React from "react";
import BarChart from "../components/BarChart";
import Header from "../components/header";
import localstyle from "../style/weatherlocation.module.css";
import CurrentForecast from "../components/CurrentForecast";
import HourlyForecast from "../components/HourlyForecast";


export default function Weather() {
  return (
    <>
      <Header />
      <div className="main_container">
        <div className="forecast_container">
          <div className="fillter_container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div className={localstyle.filters}>
            <h3>Today, Tomorrow, Next 7 days</h3>
            <form>
              <div className={localstyle.radio_group}>
                <input
                  className={localstyle.input}
                  type="radio"
                  id="option-one"
                  name="selector"
                />
                <label className={localstyle.label} htmlFor="option-one">
                  One
                </label>
                <input
                  className={localstyle.input}
                  type="radio"
                  id="option-two"
                  name="selector"
                />
                <label className={localstyle.label} htmlFor="option-two">
                  Two
                </label>
              </div>
            </form>
          </div>
          <h3 >Change of Rain</h3>
          </div>
          
          <div className="primary_container" style={{ display: "flex" }}>
            <CurrentForecast />
            <HourlyForecast />
            <BarChart />
          </div>
        </div>
        <div className="chart_container">
        </div>
      </div>
    </>
  );
}
