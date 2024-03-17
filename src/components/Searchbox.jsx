import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Searchbox = ({ handleFetch }) => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    handleFetch(city);
  };
  return (
    <div className=" flex m-4 justify-center ">
      <input
        type="text"
        placeholder="enter your city"
        className=" rounded-lg p-2 "
        value={city}
        onChange={handleChange}
      />
      <button>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="2xl"
          onClick={handleClick}
        />
      </button>
    </div>
  );
};

export default Searchbox;
