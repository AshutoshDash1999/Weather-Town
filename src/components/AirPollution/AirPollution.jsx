import { IconWind } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import {
    checkCOConcentration,
    checkNO2Concentration,
    checkO3Concentration,
    checkPM10Concentration,
    checkPM2_5Concentration,
    checkSO2Concentration,
    getColorClasses,
    showAQIBasedMessage
} from "../../utils/utils";

const AirPollution = () => {
  const { airPollutionData } = useStore();

  const [aqiInfo, setAqiInfo] = useState({});

  useEffect(() => {
    if (!!airPollutionData?.list) {
      const aqiDataResponse = showAQIBasedMessage(
        airPollutionData?.list[0].main.aqi
      );
      setAqiInfo(aqiDataResponse);
    }
  }, [airPollutionData?.list]);

  return (
    <>
      <section className="bg-white py-4 px-8 rounded-xl dark:bg-blue-950">
        <div className="flex justify-center md:justify-between items-center md:items-start flex-col md:flex-row">
          <span className="font-bold text-xl text-neutral-500 dark:text-white">
            Air Quality Index
          </span>
          <div className="flex items-center justify-end gap-1 w-64 md:w-96">
            <div>
              <IconWind stroke={1.5} className={`${aqiInfo.titleColor} dark:brightness-150`} size={70} />
            </div>
            <div>
              <h3 className={`${aqiInfo.titleColor} font-black text-xl dark:brightness-150`}>
                {aqiInfo?.title}
              </h3>
              <p className="text-neutral-400 font-semibold break-word dark:text-neutral-200">
                {aqiInfo?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-4">
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkCOConcentration(airPollutionData?.list[0].components.co)
              ).bgColor
            } ${
              getColorClasses(
                checkCOConcentration(airPollutionData?.list[0].components.co)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.co}
            </span>
            <span className="font-semibold">CO</span>
          </div>
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkNO2Concentration(airPollutionData?.list[0].components.no2)
              ).bgColor
            } ${
              getColorClasses(
                checkNO2Concentration(airPollutionData?.list[0].components.no2)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.no2}
            </span>
            <span className="font-semibold">NO2</span>
          </div>
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkO3Concentration(airPollutionData?.list[0].components.o3)
              ).bgColor
            } ${
              getColorClasses(
                checkO3Concentration(airPollutionData?.list[0].components.o3)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.o3}
            </span>
            <span className="font-semibold">O3</span>
          </div>
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkPM2_5Concentration(airPollutionData?.list[0].components.pm2_5)
              ).bgColor
            } ${
              getColorClasses(
                checkPM2_5Concentration(airPollutionData?.list[0].components.pm2_5)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.pm2_5}
            </span>
            <span className="font-semibold">PM 2.5</span>
          </div>
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkPM10Concentration(airPollutionData?.list[0].components.pm10)
              ).bgColor
            } ${
              getColorClasses(
                checkPM10Concentration(airPollutionData?.list[0].components.pm10)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.pm10}
            </span>
            <span className="font-semibold">PM10</span>
          </div>
          <div
            className={`flex flex-col items-center px-2 py-4 rounded-xl ${
              getColorClasses(
                checkSO2Concentration(airPollutionData?.list[0].components.so2)
              ).bgColor
            } ${
              getColorClasses(
                checkSO2Concentration(airPollutionData?.list[0].components.so2)
              ).textColor
            }`}
          >
            <span className="font-black text-xl">
              {airPollutionData?.list[0].components.so2}
            </span>
            <span className="font-semibold">SO2</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default AirPollution;
