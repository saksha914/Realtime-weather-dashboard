import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter city name");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex mx-auto items-center justify-center gap-4 pt-8 w-full max-w-2xl"
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={city}
          onChange={cityChangeHandler}
          placeholder="Enter City Name"
          className="w-full px-6 py-4 text-lg border-2 border-teal-300 rounded-full shadow-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
