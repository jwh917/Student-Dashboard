// weather js

let weatherUrl = "https://weatherdbi.herokuapp.com/data/weather/newyork"

function fetchWeatherData(){

  fetch(weatherUrl)
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(data=>
    {
      
      console.log(data)
      // console.log(Object.keys(data))
      
      // console.log(Object.entries(data))
      
      // for (const key in data) {
      //   if (Object.hasOwnProperty.call(data, key)) {
      //     const element = data[key];
      //     // console.log(data)
      //     console.log(key)
      //     console.log(element)
      //   }
      // }

    //   for (const key in data) {

    //     console.log(`${key}: ${data[key]}`);
    // }
      
      // console.log(Object.values(data))
      // console.log(Object.values(data)[0])
      // console.log(Object.values(data)[1])
      // console.log(Object.values(data)[2])

      

      renderWeatherSection(data)




      
    })

}


// const locationDeg = document.querySelector(".locationDeg")
// console.log(locationDeg)
// const imgComHL = document.querySelector("#imgComHL")
// const weatherDaysInfo = document.querySelector("#weatherDaysInfo")


function renderWeatherSection(weatherData){
  // console.log(weatherData)
  // console.log(weatherData.region)
  // console.log(weatherData.currentConditions)
  // console.log(weatherData.currentConditions.dayhour)
  // console.log(weatherData.currentConditions.comment)
  // console.log(weatherData.currentConditions.iconURL)
  // console.log(weatherData.currentConditions.temp.f)
  // console.log(weatherData.currentConditions.precip)
  // console.log(weatherData.currentConditions.humidity)
  // console.log(weatherData.next_days)

  const locationDeg = document.querySelector(".locationDeg")

  const imgComHL = document.querySelector(".imgComHL")

  const headerWeatherImgDiv = document.querySelector(".headerWeatherImg")

  const weatherDaysInfo = document.querySelector(".weatherDaysInfo")

  let weatherLocation = weatherData.region
  // console.log(weatherLocation)
  
  let weatherDayHour = weatherData.currentConditions.dayhour

  let weatherDay = weatherDayHour.split(" ")[0]

  // console.log(day)
  // console.log(day[0])

  // let currentWeatherInfo = Object.values(weatherData)[1] 
  
  // console.log(Object.values(currentWeatherInfo)[1].f)

  let locationFah = weatherData.currentConditions.temp.f


  
  locationDeg.innerHTML = `${weatherLocation}<br></br>${weatherDay}<br></br>${locationFah} &#176`


  // console.log(Object.values(currentWeatherInfo))

  // let headerWeatherImgStr = Object.values(currentWeatherInfo)[5]
 

  let newWeatherImg = document.createElement("img")


  newWeatherImg.src = weatherData.currentConditions.iconURL
  newWeatherImg.setAttribute("id", "headerWeatherImg")


  // console.log(newWeatherImg)

  headerWeatherImgDiv.appendChild(newWeatherImg)

  let weatherComm = weatherData.currentConditions.comment
  // console.log(weatherComm)

  let weatherPrecip = weatherData.currentConditions.precip
  // console.log(weatherPrecip)

  let weatherHumd = weatherData.currentConditions.humidity
  // console.log(weatherHumd)


  let locationForecast = `Precipitation: ${weatherPrecip}<br></br>Humidity: ${weatherHumd}<br></br>${weatherComm}`
  
  imgComHL.innerHTML = locationForecast
 
  
// function that takes array and creates the days
// functuon createWeatherDays(array){}
// createWeatherDays(weatherData)

let weatherDayInfo = ""
  weatherData.next_days.forEach(element => {
    // console.log(element)
    // console.log(element.iconURL)
    // console.log(element.day)
    // console.log(element.comment)
    // console.log(element.max_temp.f)
    // console.log(element.min_temp.f)

    // give class or id to img h2,3 and p
    weatherDayInfo +=  `<div class="weatherDaysDivs">
                        <img src=${element.iconURL}>
                        <h2>${element.day}</h2>
                        <h3>${element.comment}</h3>
                        <p>H:${element.max_temp.f} | L: ${element.min_temp.f}</p>
                        </div>`

    


    // let newWeatherDayImg = document.createElement("img") 
    
    // imgUrl = element.iconURL
    
    // newWeatherImg.src = imgUrl

    // console.log(newWeatherDayImg.src)

    // newWeatherDayImg.setAttribute("class", "weatherDaysImgs")

    // let newWeatherWeekday = document.createElement("h2")

    // newWeatherWeekday.innerHTML = element.day

    // let newWeatherComment = document.createElement("h3")

    // newWeatherComment.innerHTML = element.comment

    // let newWeatherMaxMinTemp = document.createElement("p")

    // newWeatherMaxMinTemp.innerHTML = `H:${element.max_temp.f} L:${element.min_temp.f}`

    // weatherDaysInfo.appendChild(newWeatherDayImg)
    // weatherDaysInfo.appendChild(newWeatherWeekday)
    // weatherDaysInfo.appendChild(newWeatherComment)
    // weatherDaysInfo.appendChild(newWeatherMaxMinTemp)

  })

  weatherDaysInfo.innerHTML = weatherDayInfo

}

document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOM fully loaded and parsed')
 
 
  fetchWeatherData()



})
