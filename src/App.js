import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";
import "./App.css";
import axios from "axios";

const App = () => {
  const [search, SetSearch] = useState("kathmandu");
  const [weather, SetWeather] = useState("");

  const ChangeSearch = (value) => {
    SetSearch(value);
  };

  const searchWeatherHandler = () => {
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
        )
        .then((response) => {
          console.log(response);
          SetWeather(response.data);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="weatherBox text-center">
      <h1 className=" font-extrabold text-[2.5rem] mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500  ">
        Weather Forecast
      </h1>
      <div className="">
        <div className="search mt-10 ">
          <Search
            searchData={search}
            eventHandler={ChangeSearch}
            searchWeather={searchWeatherHandler}
          />
        </div>
        <div className="result mt-10 ">
          <Result weatherData={weather} />
        </div>
      </div>
    </div>
  );
};

export default App;
