import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  // console.log("weatherData=>", weatherData);
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 404) {
          alert("Invalid City Name");
        } else {
          alert("Some error occurred please try again later");
        }
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-indigo-50 to-teal-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-800 mb-2">
          Weather Dashboard
        </h1>
        <p className="text-lg text-center text-indigo-600 mb-8">
          Get real-time weather updates for any city
        </p>
        <SearchBar onSearch={handleSearch} />
        {weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Search for a city to get started
            </h2>
            <p className="text-lg text-indigo-600">
              Enter a city name in the search bar above to see its current weather conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
