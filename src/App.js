import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempratureAndDetails from './components/TempratureAndDetails'
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherservice';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [query,setQuery] = useState({q: "london"});
const [units,setUnits] = useState("metric");
const [weather,setWeather] = useState(null);

useEffect(()=> {
//console.log(query);
//console.log(...units);
  const fetchWeather = async () => {
    toast.info('Fetching Weather for '+ query.q);
        await getFormattedWeatherData({...query, units}).then(
          data =>{
            toast.success(`successfully fetched weather for ${data.name},${data.country}`)
            setWeather(data);
          });
  } 
  fetchWeather();
},[query,units]);

// const formatBackground = () => {
//   if (!weather) return "from-cyan-700 to-blue-700";
//   const threshold = units === "metric" ? 20 : 60;
//   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

//   return "from-yellow-700 to-orange-700";
// };


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <div>
                <TimeAndLocation weather={weather}/>
                <TempratureAndDetails weather={weather}/>
                <Forecast title="Hourly Forecast" items={weather.hourly}/>
                <Forecast title="Daily Forecast"  items={weather.daily}/>
          </div>
        )}
      
      <ToastContainer autoclose={5000} theme='colored' newestOnTop={true}/>
    </div>
  );
}

export default App;
