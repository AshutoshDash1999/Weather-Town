import {
    IconCloud,
    IconDroplet,
    IconMapPin,
    IconMoon,
    IconSunHigh,
    IconTemperatureCelsius,
    IconWind,
    IconWorldLatitude,
    IconWorldLongitude
} from "@tabler/icons-react";
import dayjs from "dayjs";
import 'dayjs/locale/en';
import useStore from "../../store/useStore";

const Weather = () => {
  const { weatherData } = useStore();

  console.log("weatherData", weatherData);

  return (
    <section className="bg-white p-4 px-8 rounded-xl my-2">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl shadow-md p-4 text-white w-96 my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IconMapPin stroke={1.5} /> {weatherData?.name}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <IconWorldLatitude stroke={1.5} /> {weatherData?.coord?.lat}
            </div>
            <div className="flex items-center">
              <IconWorldLongitude stroke={1.5} /> {weatherData?.coord?.lon}
            </div>
          </div>
        </div>
        <h2 className="text-7xl text-center font-bold flex justify-center items-start my-4">
          {weatherData?.main?.temp} <IconTemperatureCelsius size={70} />
        </h2>

        {!!weatherData?.weather ? (
          <p className="text-center py-2">
            {weatherData?.weather[0].description}
          </p>
        ) : null}

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center">
            <span className="flex w-24 gap-1 item-center">
              <IconWind stroke={1.5} /> Wind
            </span>
            <span className="w-5 text-center">|</span>
            <span className="w-24">{weatherData?.wind?.speed} m/s</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="flex w-24 gap-1 item-center">
              <IconDroplet stroke={1.5} size={20} /> Humidity
            </span>
            <span className="w-5 text-center">|</span>
            <span className="w-24">{weatherData?.main?.humidity} %</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="flex w-24 gap-1 item-center">
              <IconCloud stroke={1.5} size={20} /> Cloud
            </span>
            <span className="w-5 text-center">|</span>
            <span className="w-24">{weatherData?.clouds?.all} %</span>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-xl p-4 text-white w-96 my-4 text-black flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <IconSunHigh className="text-orange-400" size={60} stroke={1.5} />
          </div>
          <div className="flex flex-col ">
            <span className="text-neutral-400">Sunrise</span>
            <span className="text-blue-400 font-bold text-xl">
              {dayjs.unix(weatherData?.sys?.sunrise).local().format("hh:mm A")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <IconMoon className="text-orange-400" size={60} stroke={1.5} />
          </div>
          <div className="flex flex-col ">
            <span className="text-neutral-400">Sunset</span>
            <span className="text-blue-400 font-bold text-xl">
              {dayjs.unix(weatherData?.sys?.sunset).local().format("hh:mm A")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Weather;