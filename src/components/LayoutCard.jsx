import React, { useState } from "react";

import CurrentWeather from "./CurrentWeather";

export const LayoutCard = () => {
  const [city, setCity] = useState("");

  const handleFetch = (city) => {
    setCity(city);
  };
  return (
    <div>
      <CurrentWeather handleFetch={handleFetch} city={city} />
    </div>
  );
};
