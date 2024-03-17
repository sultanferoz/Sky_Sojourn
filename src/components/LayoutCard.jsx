import React, { useState } from "react";
import Searchbox from "./Searchbox";
import CurrentWeather from "./CurrentWeather";

export const LayoutCard = () => {
  // export const LayoutCard = (props) => {
  //   const {handleFetch} = props;
  const [city, setCity] = useState("");

  const handleFetch = (city) => {
    setCity(city);
  };
  return (
    <div className=" max-w-[80%] boder-2 bg-gray-800 mx-auto p-12 rounded-sm">
      {/* <Searchbox />
      <CurrentWeather handleFetch={handleFetch} /> */}
      <Searchbox handleFetch={handleFetch} />
      <CurrentWeather city={city} />
    </div>
  );
};
