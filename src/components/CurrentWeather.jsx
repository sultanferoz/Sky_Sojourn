import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTemperatureLow,
  faTint,
  faWind,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Searchbox from "./Searchbox";

const WeatherApp = () => {
  const [city, setCity] = useState("Gilgit");
  const [data, setData] = useState(null);
  const [bgImage, setBgImage] = useState("../../public/images/lightning.jpg");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=3f2247de26d2429566d812c728926abe`
        );
        if (response.ok) {
          const weatherData = await response.json();
          setData(weatherData);
          updateBackground(weatherData.weather[0]?.main.toLowerCase());
        } else {
          console.error("Error fetching weather data:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  const updateBackground = (condition, temp) => {
    if (condition.includes("rain")) {
      setBgImage("../../public/images/rain.jpg");
    } else if (condition.includes("snow")) {
      setBgImage("../../public/images/snow.jpg");
    } else if (condition.includes("cloud")) {
      if (temp < 0) {
        setBgImage("../../public/images/snow.jpg");
      } else {
        setBgImage("../../public/images/clouds.jpg");
      }
    } else {
      setBgImage("../../public/images/sunnyday.jpg");
    }
  };

  const handleFetch = (newCity, condition, temp) => {
    setCity(newCity);
    updateBackground(condition, temp);
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex flex-col justify-end lg:mb-10 text-white px-6 py-10 lg:py-0">
        <div className="flex flex-col items-center lg:flex-row lg:items-end lg:space-x-6">
          <h1 className="text-6xl lg:text-8xl font-bold">
            {data?.main?.temp}°C
          </h1>
          <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <h2 className="text-4xl lg:text-4xl font-semibold">{data?.name}</h2>
            <p className="text-base lg:text-lg">
              {new Date().toLocaleString()}
            </p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            alt="Weather Icon"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 bg-black bg-opacity-50 p-4 lg:p-6 text-white space-y-16 text-xl lg:text-2xl font-bold pt-10">
        <div className="flex items-center border-b border-gray-300 pb-2">
          <Searchbox handleFetch={handleFetch} />
        </div>

        <div className="space-y-10 leading-10">
          <h3 className="text-xl lg:text-4xl font-bold mb-4">
            Weather Details
          </h3>
          <div className="space-y-8 text-sm lg:text-base">
            <div className="flex justify-between items-center">
              <span>Temp max:</span>
              <span>{data?.main?.temp_max}°C</span>
              <FontAwesomeIcon
                icon={faTemperatureLow}
                className="text-red-600"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Temp min:</span>
              <span>{data?.main?.temp_min}°C</span>
              <FontAwesomeIcon
                icon={faTemperatureLow}
                className="text-blue-400"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Feels Like:</span>
              <span>{data?.main?.feels_like}°C</span>
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                className="text-red-400"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Humidity:</span>
              <span>{data?.main?.humidity}%</span>
              <FontAwesomeIcon icon={faTint} className="text-cyan-300" />
            </div>
            <div className="flex justify-between items-center">
              <span>Pressure:</span>
              <span>{data?.main?.pressure} hPa</span>
              <FontAwesomeIcon icon={faCloud} className="text-white" />
            </div>
            <div className="flex justify-between items-center">
              <span>Wind:</span>
              <span>{data?.wind?.speed} km/h</span>
              <FontAwesomeIcon icon={faWind} className="text-yellow-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
