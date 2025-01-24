const APIkey = "9978bb2ff73d9f86bc1358eb3118bc40";
const APIcall = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityname = document.querySelector("#input-txt");
const search_icon = document.querySelector("#search-img");

const clear_img = document.querySelector("#rain");

async function checkweather(city) {
  try {
    const response = await fetch(APIcall + city + `&appid=${APIkey}&units=metric`);
    const data = await response.json();
    
    // Check if the city was found
    if (data.cod === 200) {

      document.querySelector("#temp-rec").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#percentage").innerHTML = data.main.humidity + "%";
      document.querySelector("#speed-measure").innerHTML = data.wind.speed + " km/h";

      switch (data.weather[0].main) {
        case "Clear":
          clear_img.src = "/weather-app-img/images/clear.png";
          break;
        case "Clouds":
          clear_img.src = "/weather-app-img/images/clouds.png";
          break;
        case "Drizzle":
          clear_img.src = "/weather-app-img/images/drizzle.png";
          break;
        case "Rain":
          clear_img.src = "/weather-app-img/images/rain.png";
          break;
        case "Snow":
          clear_img.src = "/weather-app-img/images/snow.png";
          break;
        case "Mist":
          clear_img.src = "/weather-app-img/images/mist.png";
          break;
        case "Wind":
          clear_img.src = "/weather-app-img/images/wind.png";
          break;
        default:
          clear_img.src = "/weather-app-img/images/default.png"; // Default image
          break;
      }
    } else {
      alert("City not found! Please check the name and try again.");
    }
  } catch (error) {
    alert("Error fetching weather data. Please try again later.");
    console.error(error);
  }
}

search_icon.addEventListener("click", () => {
  if (cityname.value.trim() !== "") {
    checkweather(cityname.value);
  } else {
    alert("Please enter a city name.");
  }
});
