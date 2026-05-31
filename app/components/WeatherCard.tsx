import { WeatherData } from "../types/weather";

type Props = {
    data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-2xl text-gray-600 font-bold mb-2">{data.name}</h2>
            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="mx-auto"
            />
            <p className="text-gray-600 mb-4">{data.weather[0].description}</p>
            <p className="text-5xl text-gray-600 font-bold mb-4">{data.main.temp}°</p>
            <div className="flex justify-around text-gray-600">
                <div>
                    <p className="text-sm">体感温度</p>
                    <p className="font-semibold">{data.main.feels_like}°</p>
                </div>
                <div>
                    <p className="text-sm">湿度</p>
                    <p className="font-semibold">{data.main.humidity}%</p>
                </div>
                <div>
                    <p className="text-sm">風速</p>
                    <p className="font-semibold">{data.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    );
}