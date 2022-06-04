// weather js

// FIRST ATTEMPT UNTIL API WAS SHUTTDOWN

let weatherUrl = "https://weatherdbi.herokuapp.com/data/weather/newyork"

function fetchWeatherData(){
  fetch(weatherUrl)
    .then(res=>res.json())
    .then(data=> {
      renderWeatherSection(data)
      renderWeatherSectionBackground(data)
    })
}

function renderWeatherSection(weatherData){
  const locationDeg = document.querySelector(".locationDeg")
  const imgComHL = document.querySelector(".imgComHL")
  const headerWeatherImgDiv = document.querySelector(".headerWeatherImg")

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

  const weatherDaysInfo = document.querySelector(".weatherDaysInfo")

  let weatherDayInfo = ""
  weatherData.next_days.forEach(dayInfo => {
    weatherDayInfo +=  `<div class="weatherDaysDivs">
                        <img src=${dayInfo.iconURL}>
                        <h2>${dayInfo.day}</h2>
                        <h3>${dayInfo.comment}</h3>
                        <h3>H:${dayInfo.max_temp.f} | L: ${dayInfo.min_temp.f}</h3>
                        </div>`
  })
  weatherDaysInfo.innerHTML = weatherDayInfo
}

function renderWeatherSectionBackground(weatherData){

const weatherCon = document.querySelector(".weatherContainer")

  switch(weatherData.currentConditions.comment){
  case "Sunny":
    weatherCon.style.backgroundImage = "url('clearSunnySky.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Mostly sunny":
    weatherCon.style.backgroundImage = "url('sunny-bluesky.gif')" 
    weatherCon.style.backgroundSize = "1000px"
      break

  case "Partly sunny":
    weatherCon.style.backgroundImage = "url('sunny-bluesky.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Cloudy":
    weatherCon.style.backgroundImage = "url('cloudy-sky.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Mostly cloudy":
    weatherCon.style.backgroundImage = "url('veryCloudy.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Partly cloudy":
    weatherCon.style.backgroundImage = "url('veryCloudy.gif')"
    weatherCon.style.backgroundSize = "1000px"  
      break

  case "Showers":
    weatherCon.style.backgroundImage = "url('rainy-sky.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Scattered showers":
    weatherCon.style.backgroundImage = "url('rainy-sky.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Thunderstorm":
    weatherCon.style.backgroundImage = "url('stormThunder.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Scattered thunderstorms":
    weatherCon.style.backgroundImage = "url('stormThunder.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

  case "Isolated thunderstorms":
    weatherCon.style.backgroundImage = "url('stormThunder.gif')"
    weatherCon.style.backgroundSize = "1000px" 
      break

    case "Snow":
      weatherCon.style.backgroundImage = "url('winterSnowing.gif')"
      weatherCon.style.backgroundSize = "1000px" 
        break
    
  default: return
  }
}

// SECOND ATTEMPT 

// fetch("http://localhost:3000/apiKeys")
// .then(response => response.json())
// .then(data => fetchCurrentWeatherData(data.currentWeatherUrl))

// // Current weather data fetch
// function fetchCurrentWeatherData(weatherUrl){
//   fetch(weatherUrl)
//     .then(res=>res.json())
//     .then(data=>{
//       renderWeatherHeader(data)
//       renderWeatherBackground(data)
//     })
// }

// function renderWeatherHeader(weatherData){
//   const locationDeg = document.querySelector(".locationDeg")
//   const imgComHL = document.querySelector(".imgComHL")
//   const headerWeatherImgDiv = document.querySelector(".headerWeatherImg")

//   const weatherLocation = weatherData.name
//   const locationFah = Math.trunc((weatherData.main.temp - 273.15) * 9/5 + 32)
//   const weatherForecast = weatherData.weather[0].main
//   locationDeg.innerHTML = `${weatherLocation}<br></br>${weatherForecast}<br></br>${locationFah}&#176`

//   const newWeatherImg = document.createElement("img")
//   newWeatherImg.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
//   newWeatherImg.setAttribute("id", "headerWeatherImg")
//   headerWeatherImgDiv.appendChild(newWeatherImg)

//   const weatherComm = weatherData.weather[0].description
//   const weatherHumd = `${weatherData.main.humidity}%`
//   const weatherTempMax = Math.trunc((weatherData.main.temp_max - 273.15) * 9/5 + 32)
//   const weatherTempMin = Math.trunc((weatherData.main.temp_min - 273.15) * 9/5 + 32)
//   const locationForecast = `Humidity: ${weatherHumd}<br></br> Forecast: ${weatherComm} <br></br> H: ${weatherTempMax}&#176 | L: ${weatherTempMin}&#176`

//   imgComHL.innerHTML = locationForecast

// }

// fetch("http://localhost:3000/apiKeys")
// .then(response => response.json())
// .then(data => fetchFiveDayWeatherData(data.fiveDayWeatherUrl))

// // 5 day weather forecast fetch
// function fetchFiveDayWeatherData(weatherUrl){
//   fetch(weatherUrl)
//     .then(res=>res.json())
//     .then(data=>
//       {
//         // console.log(data)
//         // console.log(data.list)
//         // console.log(data.list[0])
//         // console.log(data.list[0].weather[0].icon)
//         // console.log(data.list[0].dt_txt)
//         // console.log(data.list[0].weather[0].description)
//         // console.log(data.list[0].main.temp_max)
//         // console.log(data.list[0].main.temp_min)
//         // console.log(data.list[2])
//         // console.log(data.list[10])
//         // console.log(data.list[18])
//         // console.log(data.list[26])
//         // console.log(data.list[34])

//         document.querySelector(".weatherDaysInfo").innerHTML = ""
//         // renderWeatherDaySection(data.list[0])
//         renderWeatherDaySection(data.list[2])
//         renderWeatherDaySection(data.list[10])
//         renderWeatherDaySection(data.list[18])
//         renderWeatherDaySection(data.list[26])
//         renderWeatherDaySection(data.list[34])
//       })
// }

// function renderWeatherDaySection(weatherData){
//   const weatherDaysInfo = document.querySelector(".weatherDaysInfo")

//   const roughDateTxt = weatherData.dt_txt
//   const dateTxt = roughDateTxt.substr(5, 5)

//   let weatherDay1 = `<div class="weatherDaysDivs">
//                       <img src=https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png>
//                       <h2>${dateTxt}</h2>
//                       <h3>${weatherData.weather[0].description}</h3>
//                       <p>H: ${Math.trunc((weatherData.main.temp_max - 273.15) * 9/5 + 32)}&#176 | L: ${Math.trunc((weatherData.main.temp_min - 273.15) * 9/5 + 30)}&#176
//                       </p>
//                       </div>`

//   weatherDaysInfo.innerHTML += weatherDay1
// }

// function renderWeatherBackground(weatherData){

//   const weatherCon = document.querySelector(".weatherContainer")
  
//     switch(weatherData.weather[0].description){
//     case "clear sky":
//       weatherCon.style.backgroundImage = "url('clearSunnySky.gif')" //change
//       weatherCon.style.backgroundSize = "1000px" 
//         break
  
//     case "few clouds":
//       weatherCon.style.backgroundImage = "url('sunny-bluesky.gif')" 
//       weatherCon.style.backgroundSize = "1000px"
//         break
  
//     case "scattered clouds":
//       weatherCon.style.backgroundImage = "url('veryCloudy.gif')" //change
//       weatherCon.style.backgroundSize = "1000px" 
//         break
  
//     case "broken clouds":
//       weatherCon.style.backgroundImage = "url('cloudy-sky.gif')"
//       weatherCon.style.backgroundSize = "1000px" 
//         break
  
//     case "shower rain":
//       weatherCon.style.backgroundImage = "url('rainy-sky.gif')"
//       weatherCon.style.backgroundSize = "1000px" 
//         break
  
//     case "rain":
//       weatherCon.style.backgroundImage = "url('rainy-sky.gif')"
//       weatherCon.style.backgroundSize = "1000px"  
//         break
  
//     case "thunderstorm":
//       weatherCon.style.backgroundImage = "url('stormThunder.gif')"
//       weatherCon.style.backgroundSize = "1000px" 
//         break

//     case "snow":
//       weatherCon.style.backgroundImage = "url('winterSnowing.gif')"
//       weatherCon.style.backgroundSize = "1000px" 
//         break
      
//     default:
//         return
//     }
//   }
  
document.addEventListener('DOMContentLoaded', () => {
  // fetchWeatherData()

  // fetchCurrentWeatherData()
  // fetchFiveDayWeatherData()
})
