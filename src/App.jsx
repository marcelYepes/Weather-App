import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from "./components/Loading";




function App() {
  const [weather, setweather] = useState();
  const [temperature, settemperature] = useState()
  const [inputValue, setInputValue] = useState('Sabaneta')

  useEffect(() => {    
      const apikey = "3bc675e857515bc2ebc2845d5fe19a6d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apikey}`;
      axios
        .get(url)
        .then((res) => {  
          const celsius = (res.data.main.temp -273.15).toFixed(1)
          const fahrenheit = (celsius *9/5 +32).toFixed(1)

          settemperature({celsius, fahrenheit})              
          setweather(res.data)
        
        })
        .catch((err) => console.log(err));
    }, [inputValue]);

    const appStyle = {
      backgroundImage : "url('/aaron-boris.jpg')"
    }

    const handleSubmit = e => {
      e.preventDefault()
      setInputValue(e.target.input.value.toLowerCase())
      e.target.input.value=''
    }

    return (
    <div style={appStyle} className="App">         
      <form onSubmit={handleSubmit}>
        <input className="input" id='input' type="text" />
        <button className="input__btn">Search by city</button>
      </form>
      {weather
        ? <WeatherCard 
        weather={weather}
        temperature={temperature}
          />
        :
        <Loading />
        }
          
    </div>
  );
}

export default App;
