import { create } from "zustand";

const useStore = create((set) => ({
  weatherData: {},
  setWeatherData: (data) => set({ weatherData: data }),
  airPollutionData: {},
  setAirPollutionData: (data) => set({ airPollutionData: data }),
  forecastData: {},
  setForecastData: (data) => set({ forecastData: data }),
  userLocation: {
    latitude: 0,
    longitude: 0,
  },
  setUserLocation: (latitude, longitude) =>
    set({
      userLocation: {
        latitude,
        longitude,
      },
    }),
  cityName: "Bhubaneswar",
  setCityName: (name) => set({ cityName: name }),
}));

export default useStore;
