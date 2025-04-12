import React from "react";

const WeatherCard = ({ weather }) => {
  const { city, wind, temperature, condition, icon, humidity } = weather;
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-teal-600 to-indigo-700 text-white shadow-2xl rounded-3xl p-8 mt-10 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-2">{city}</h2>
          <p className="text-xl font-semibold capitalize text-teal-100">{condition}</p>
        </div>
        <div className="bg-white/20 rounded-full p-4">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
            className="w-24 h-24"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-lg text-teal-100">Wind Speed</p>
          <p className="text-2xl font-bold">{wind} m/s</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-lg text-teal-100">Temperature</p>
          <p className="text-2xl font-bold">{temperature}°C</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-lg text-teal-100">Humidity</p>
          <p className="text-2xl font-bold">{humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-lg text-teal-100">Condition</p>
          <p className="text-2xl font-bold capitalize">{condition}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
