let cityName = document.querySelector(".current-city");
console.log(cityName);
document.getElementById("search-input").required = false;

/////////
function displayWeather(response) {
  let temperatureValue = document.querySelector("#current-temperature");
  temperatureValue.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1.current-city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "a017cf6758e1482b564bdt6545doc30a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//////
let date = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  console.log(day);
  let hours = date.getHours();
  console.log(hours);
  let minuts = date.getMinutes();
  return day + ", " + hours + ":" + minuts;
}
let weatherResult = document.querySelector("#current-date");
weatherResult.innerHTML = formatDate(date);

//other option//

////let weatherResult = document.querySelector("#current-date");
///weatherResult.innerHTML = day + ", " + hours + ":" + minuts;///
