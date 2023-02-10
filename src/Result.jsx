import React from "react";
import "./Result.css";

const Result = ({ weatherData }) => {
  return (
    <div className="result flex flex-row  gap-5 justify-center ">
      {weatherData.length !== 0 ? (
        <>
          <div className="tempnimg w-[350px] flex flex-col  items-center">
            <h2 className=" text-[40px] font-semibold ">
              {weatherData.main.temp}°C
            </h2>
            <h4 className="text-[18px] font-semibold">
              {weatherData.weather[0].main}
            </h4>
            <img
              className="img text-center "
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
            <h4 className="text-[20px]">
              {weatherData.weather[0].description}
            </h4>
          </div>
          <div className="details w-[400px]">
            <h3 className=" text-[40px] font-bold mb-3">{weatherData.name}</h3>
            <div className=" flex flex-row justify-center gap-5">
              <div className="details_Primary w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Sunrise
                </h2>
                <div className=" flex flex-row  items-center justify-between">
                  <h3 className=" text-[24px] font-semibold text-white">
                    6.45am
                  </h3>
                  <img
                    className="sun justify-items-end"
                    src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons-1.png"
                  />
                </div>
              </div>
              <div className="details_Primary  justify-start  w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Sunset
                </h2>
                <div className=" flex flex-row justify-between items-center">
                  <h3 className=" text-[24px] font-semibold text-white">
                    5.45pm
                  </h3>
                  <img
                    className="sun ml-3"
                    src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons-1.png"
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-5 justify-center">
              <div className="details_Primary w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Humidity
                </h2>
                <div className=" flex flex-row justify-between items-center">
                  <h3 className=" text-[20px] font-semibold text-white">
                    {weatherData.main.humidity}%
                  </h3>
                  <i class="fa-sharp fa-solid fa-droplet"></i>
                </div>
              </div>
              <div className="details_Primary justify-start  w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Visibility
                </h2>
                <div className=" flex flex-row justify-between items-center">
                  <h3 className=" text-[20px] font-semibold text-white">
                    {weatherData.visibility}m
                  </h3>
                  <i class="fa-sharp fa-solid fa-eye"></i>
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-5 justify-center">
              <div className="details_Primary w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Wind
                </h2>
                <div className=" flex flex-row justify-between items-center">
                  <h3 className=" text-[24px] font-semibold text-white">
                    {weatherData.wind.speed}
                  </h3>
                  <i class="fa-sharp fa-solid fa-wind"></i>
                </div>
              </div>
              <div className="details_Primary  justify-start  w-[150px]  ">
                <h2 className=" font-semibold text-[18px] text-white text-start">
                  Pressure
                </h2>
                <div className=" flex flex-row justify-between items-center">
                  <h3 className=" text-[24px] font-semibold text-white">
                    {weatherData.main.pressure}
                  </h3>
                  <i class="fa-sharp fa-solid fa-droplet-degree"></i>
                </div>
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
  /* <img
                    className="sun"
                    src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons-1.png"
                  /> */
  // <img
  //   className="sun"
  //   src="https://img.icons8.com/external-prettycons-flat-prettycons/47/null/external-sunrise-weather-prettycons-flat-prettycons.png"
  // />
}
