import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Searchbox = ({ handleFetch }) => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    handleFetch(city);
    setCity("");
  };
  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Search Location..."
        className="w-full bg-transparent text-white placeholder-gray-300 p-2 focus:outline-none"
        value={city}
        onChange={handleChange}
      />

      <button className="text-white ml-2">
        <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleClick} />
      </button>
    </div>
  );
};

export default Searchbox;
