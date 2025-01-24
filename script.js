const APIkey="9978bb2ff73d9f86bc1358eb3118bc40"
const APIcall="https://api.openweathermap.org/data/2.5/weather?q="
const cityname=document.querySelector("#input-txt")
const search_icon=document.querySelector("#search-img")


const clear_img=document.querySelector("#rain")



async function checkweather(city) {
  const response=await fetch(APIcall+ city +`&appid=${APIkey}`);
  var data = await response.json();
  console.log(data)
  document.querySelector("#temp-rec").innerHTML=Math.round(data.main.temp) + "°c";
  document.querySelector("#city").innerHTML=data.name;
  document.querySelector("#percentage").innerHTML=data.main.humidity + "%";
  document.querySelector("#speed-measure").innerHTML=data.wind.speed + "km/h";

  if(data.weather[0].main=="Clear"){
    clear_img.src="weather-app-img/images/clear.png"
  }
  else if(data.weather[0].main=="Cloud"){
    clear_img.src="weather-app-img/images/clouds.png"
  }
  else if(data.weather[0].main=="Drizzle"){
    clear_img.src="weather-app-img/images/drizzle.png"
  } 
  else if(data.weather[0].main=="Humidity"){
    clear_img.src="weather-app-img/images/humidity.png"
  }
  else if(data.weather[0].main=="Mist"){
    clear_img.src="weather-app-img/images/mist.png"
  } 
  else if(data.weather[0].main=="Rain"){
    clear_img.src="weather-app-img/images/rain.png"
  } 
  else if(data.weather[0].main=="Snow"){
    clear_img.src="weather-app-img/images/snow.png"
  } 
  else if(data.weather[0].main=="Wind"){
    clear_img.src="weather-app-img/images/wind.png"
  } 
}
search_icon.addEventListener("click",()=>{checkweather(cityname.value);})
