// weather js
let weatherUrl = "https://weatherdbi.herokuapp.com/data/weather/newyork"

function fetchWeatherData(){

  fetch(weatherUrl)
    .then(res=>res.json())
    .then(data=>renderWeatherSection(data))
}

function renderWeatherSection(weatherData){
  const locationDeg = document.querySelector(".locationDeg")
  const imgComHL = document.querySelector(".imgComHL")
  const headerWeatherImgDiv = document.querySelector(".headerWeatherImg")
  const weatherDaysInfo = document.querySelector(".weatherDaysInfo")

  let weatherLocation = weatherData.region
  let weatherDayHour = weatherData.currentConditions.dayhour
  let weatherDay = weatherDayHour.split(" ")[0]
  let locationFah = weatherData.currentConditions.temp.f
  locationDeg.innerHTML = `${weatherLocation}<br></br>${weatherDay}<br></br>${locationFah} &#176`

  let newWeatherImg = document.createElement("img")
  newWeatherImg.src = weatherData.currentConditions.iconURL
  newWeatherImg.setAttribute("id", "headerWeatherImg")
  headerWeatherImgDiv.appendChild(newWeatherImg)

  let weatherComm = weatherData.currentConditions.comment
  let weatherPrecip = weatherData.currentConditions.precip
  let weatherHumd = weatherData.currentConditions.humidity
  let locationForecast = `Precipitation: ${weatherPrecip}<br></br>Humidity: ${weatherHumd}<br></br>${weatherComm}`
  imgComHL.innerHTML = locationForecast

let weatherDayInfo = ""
  weatherData.next_days.forEach(element => {
    weatherDayInfo +=  `<div class="weatherDaysDivs">
                        <img src=${element.iconURL}>
                        <h2>${element.day}</h2>
                        <h3>${element.comment}</h3>
                        <p>H:${element.max_temp.f} | L: ${element.min_temp.f}</p>
                        </div>`
  })
  weatherDaysInfo.innerHTML = weatherDayInfo
}

document.addEventListener('DOMContentLoaded', () => {
  // fetchWeatherData()
})