import { WeatherData } from "../types/weather";

export async function fetchWeather(city: string): Promise<WeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=ja`
  );
  if (!res.ok) throw new Error("都市が見つかりませんでした");
  return res.json();
}
