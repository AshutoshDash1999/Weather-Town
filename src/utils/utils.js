export const showWeatherIcon = (weatherMain, weatherDescription) => {
  const dayType =
    new Date().getHours() > 5 && new Date().getHours() < 18 ? "day" : "night";

  switch (weatherMain) {
    case "Clear":
      return `/assets/weather-icons/clear-sky/${dayType}.png`;
    case "Haze" ||
      "Mist" ||
      "Tornado" ||
      "Squall" ||
      "Ash" ||
      "Dust" ||
      "Sand" ||
      "Fog" ||
      "Dust" ||
      "Smoke" ||
      "Mist":
      return `/assets/weather-icons/atmosphere/${dayType}.png`;
    case "Snow":
      return `/assets/weather-icons/snow/snow.png`;
    case "Drizzle":
      return `/assets/weather-icons/drizzle/${dayType}.png`;
    case "Rain":
      return `/assets/weather-icons/rain/${dayType}.png`;
    case "Thunderstorm":
      return `/assets/weather-icons/thunderstorm/thunderstorm.png`;
    case "Clouds":
      return `/assets/weather-icons/clouds/clouds.png`;

    default:
      return `/assets/weather-icons/atmosphere/${dayType}.png`;
  }
};

export const showAQIBasedMessage = (aqi) => {
  let aqiMessage = {
    title: "",
    message: "",
    titleColor: "",
  };

  switch (aqi) {
    case 1:
      aqiMessage.title = "Good";
      aqiMessage.message =
        "The air is clean and refreshing, and you can enjoy the outdoors without any worries";
      aqiMessage.titleColor = "text-green-500";
      break;
    case 2:
      aqiMessage.title = "Fair";
      aqiMessage.message =
        "Air quality is acceptable, but there may be a small health risk for some people, such as children, the elderly, and people with respiratory problems";
      aqiMessage.titleColor = "text-lime-500";
      break;
    case 3:
      aqiMessage.title = "Moderate";
      aqiMessage.message =
        "Air quality is unhealthy for people with respiratory problems, such as asthma and bronchitis. Everyone else may also experience some health effects.";
      aqiMessage.titleColor = "text-yellow-500";
      break;
    case 4:
      aqiMessage.title = "Poor";
      aqiMessage.message =
        "Air quality is unhealthy for everyone. People should reduce prolonged outdoor exertion and avoid strenuous activities.";
      aqiMessage.titleColor = "text-orange-500";
      break;
    case 5:
      aqiMessage.title = "Very Poor";
      aqiMessage.message =
        "Air quality is very unhealthy. People should avoid all outdoor activities.";
      aqiMessage.titleColor = "text-red-500";
      break;
    default:
      break;
  }

  return aqiMessage;
};

