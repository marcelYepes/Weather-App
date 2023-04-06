import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
   
  const [isCelsius, setIsCelsius] = useState(true)
 
   const handleChangeTempButton = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <article className="mainCard">
      <h1 className="card__title">Weather App</h1>
      <h3 className="card__subtitle">{weather?.name}, {weather?.sys.country}</h3>
          <section className="card__info">
          <header>
            <img className="card__img" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}alt="" />
          </header>
          <article className="article__info">
            <h3 className="article__title">"{weather?.weather[0].description}"</h3>
              <ul>
                <li>
                  <span>Wind Speed: </span>
                  {weather?.wind.speed} m/s
                </li>
                <li>
                  <span>Clouds: </span>
                  {weather?.clouds.all} %
                </li>
                <li>
                  <span>Pressure: </span>
                  {weather?.main.pressure} hPa
                </li>
              </ul>
          </article>
        </section>
        <footer>
          <h2>
          {isCelsius
            ? `${temperature?.celsius} °C`
            : `${temperature?.fahrenheit} °F`
          }
          </h2>
          <button className="temp__btn" onClick={handleChangeTempButton}> 
          Change to {isCelsius ? '°F' : '°C'}</button>
        </footer>            
    </article>
  );
};

export default WeatherCard;
