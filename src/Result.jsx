import React from "react";
import "./Result.css";

const Result = ({ weatherData }) => {
  return (
    <div className="result flex flex-row justify-center gap-5 text-center">
      {weatherData.length !== 0 ? (
        <>
          <div className="tempnimg w-[300px]">
            <h2 className=" text-[40px] font-bold">
              {weatherData.main.temp}°C
            </h2>
            <h4 className="text-[18px] font-bold">
              {weatherData.weather[0].main}
            </h4>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
            <h4 className="text-[20px]">
              {weatherData.weather[0].description}
            </h4>
          </div>
          <div className="details w-[300px]">
            <h3 className=" text-[40px] font-bold ">{weatherData.name}</h3>
            <div className="flex flex-row justify-evenly">
              <div className=" flex flex-col justify-center">
                <img
                  className="sun"
                  src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons-1.png"
                />
                <h4 className=" text-center">Sunrise</h4>
              </div>
              <div>
                <img
                  className="sun"
                  src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons.png"
                />
                <h4 className=" ">Sunset</h4>
              </div>
            </div>
            <div className="weather-details  flex flex-col justify-center ">
              <div className="latlog flex flex-row mt-3 justify-evenly">
                <h3
                  className=" font-bold
                "
                >
                  lat:{weatherData.coord.lat}
                </h3>
                <h3
                  className=" font-bold
                "
                >
                  log:{weatherData.coord.lon}
                </h3>
              </div>
              <div className=" flex flex-row justify-evenly">
                <h3 className=" font-bold">
                  Humidity:{weatherData.main.humidity}%
                </h3>
                <h3 className=" font-bold">
                  Visibility:{weatherData.visibility}M
                </h3>
              </div>
              <div className=" flex flex-row justify-between">
                <h3 className=" font-bold">Wind:{weatherData.wind.speed}</h3>
                <h3 className=" font-bold">
                  Pressure:{weatherData.main.pressure}mb
                </h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Please Enter the city </h3>
        </>
      )}
    </div>
  );
};

export default Result;

{
  /* <h3 className=" text-[16px]">
                Wind Speed:{weatherData.wind.speed}
              </h3>
              <h3 className=" text-[16px]">
                Pressure:{weatherData.main.pressure}
              </h3>
              <h3 className=" text-[16px]">
                Humidity:{weatherData.main.humidity}
              </h3>
              <h3 className=" text-[16px]">
                Visibility:{weatherData.visibility}
              </h3>

              <h4 className=" text-[16px]">
              lon:{weatherData.coord.lon},lat:{weatherData.coord.lat}
            </h4>
               */
}
