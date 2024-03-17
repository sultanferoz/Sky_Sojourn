// CurrentWeather.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faThermometer,
  faWind,
  faCloudSun,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

const CurrentWeather = ({ city }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=${city}&appid=3f2247de26d2429566d812c728926abe`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Failed to fetch weather data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div>
      {data && (
        <div className="flex justify-between text-center">
          <div>
            <FontAwesomeIcon icon={faTemperatureLow} size="2xl" />
            <p>Temperature: {data.main.temp}°F</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faThermometer} size="2xl" />
            <p>Feels Like: {data.main.feels_like}°F</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCloudSun} size="2xl" />
            <h2>City: {data.name}</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faWater} size="2xl" />
            <p>Humidity: {data.main.humidity}%</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faWind} size="2xl" />
            <p>Wind Speed: {data.wind.speed} mph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;




// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTemperatureLow,
//   faThermometer,
//   faWind,
//   faCloudSun,
//   faWater,
// } from "@fortawesome/free-solid-svg-icons";

// const CurrentWeather = ({ city }) => {
//   const weather_url = `https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=${city}&appid=3f2247de26d2429566d812c728926abe`;
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`${weather_url}${city}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       })
//       .then(console.log(data))
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [city]);

//   return (
//     <div>
//       {data && (
//         <>
//           <div className="flex justify-between text-center">
//             <div>
//               <FontAwesomeIcon icon={faTemperatureLow} size="2xl" />
//               <p>Temperature: {data.main.temp}°F</p>
//             </div>
//             <div>
//               <FontAwesomeIcon icon={faThermometer} size="2xl" />
//               <p>Feels Like: {data.main.feels_like}°F</p>
//             </div>
//             <div>
//               <FontAwesomeIcon icon={faCloudSun} size="2xl" />
//               <h2>City:{data.name}</h2>
//             </div>

//             <div>
//               <FontAwesomeIcon icon={faWater} size="2xl" />
//               <p>Humidity: {data.main.humidity}%</p>
//             </div>
//             <div>
//               <FontAwesomeIcon icon={faWind} size="2xl" />
//               <p>Wind Speed: {data.wind.speed} mph</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CurrentWeather;
