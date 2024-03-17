import React, { useState,useEffect } from 'react'
const weather_url = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=germany&appid=3f2247de26d2429566d812c728926abe";
const CurrentDay = () => {
    const [data, setData] = useState("")
    
  useEffect(() => {
    fetch(`${weather_url}`)
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
 }, []);
  return (
    <div></div>
  )
}

export default CurrentDay