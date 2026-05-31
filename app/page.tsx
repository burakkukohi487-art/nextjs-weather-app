"use client";

import { useState } from "react";
import { fetchWeather } from "./lib/fetchWeather";
import { WeatherData } from "./types/weather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/loadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch {
      setError("都市が見つかりませんでした");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-center text-black">天気検索</h1>
        <SearchBar city={city} onChange={setCity} onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard data={weather} />}
      </div>
    </main>
  );
}