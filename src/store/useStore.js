import { create } from "zustand";

const useStore = create((set) => ({
  weatherData: {},
  setWeatherData: (data) => set({ weatherData: data }),
  airPollutionData: {},
  setAirPollutionData: (data) => set({ airPollutionData: data }),
  forecastData: {},
  setForecastData: (data) => set({ forecastData: data }),
  alertData: [],
  setAlertData: (data) => set({ alertData: data }),
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
  userCity: "Bhubaneswar",
  setUserCity: (city) => set({ userCity: city }),
  isError: false,
  setError: (error) =>
    set({
      isError: error,
    }),
  isDarkMode: false,
  setDarkMode: (value) =>
    set({
        isDarkMode: value,
    }),
}));

export default useStore;
