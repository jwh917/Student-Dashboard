// calendar js

const date = new Date()

// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getUTCDate())
// console.log(date.getFullYear())
// console.log(date.toDateString())


function renderDateInfo(){

  const dateInfoDiv = document.querySelector(".dateInfoStr")

  let dateInfo = document.createElement("span")

  dateInfo.setAttribute("id", "todaysDate")

  dateInfo.innerHTML = date.toDateString()

  dateInfoDiv.appendChild(dateInfo)


}

const monthsNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
]


let calendar = document.querySelector(".calendar")

// function renderCalendar(){
function renderCalendar(newDate, month, year){
  // console.log(month)
  // console.log(year)

  // let currentDate = new Date()

  // let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31]

  let monthChanger = document.querySelector("#month")
  let calendarHeaderYear = document.querySelector("#year")

  monthChanger.innerHTML = monthsNames[newDate.getMonth()]
  calendarHeaderYear.innerHTML = newDate.getFullYear()


 let calendarDays = document.querySelector(".days")
  calendarDays.innerHTML = ""


  newDate.setDate(1)


    // console.log(currentDate.getDay())

  const lastDay = new Date(year, month + 1, 0).getDate()

  const prevLastDay = new Date(year, month, 0).getDate()

  const firstDayIndex = newDate.getDay()

  const lastDayIndex = new Date(year, month + 1, 0).getDay()

  const nextDays = 7 - lastDayIndex - 1

  let days = ""

  // prev month
  for (let index0 = firstDayIndex; index0 > 0; index0--) {
      days += `<div class="previousMonthDays">${prevLastDay - index0 + 1}</div>`
    }

    // days of the month
  for (let index1 = 1; index1 <= lastDay; index1++) {
    // if(index1 === new Date().getDate() && new Date().getFullYear() === currentDate.getFullYear() && new Date().getMonth() === currentDate.getMonth()){

    if(index1 === new Date().getDate() && new Date().getFullYear() === year && new Date().getMonth() === month){

    // if(index1 === new Date().getDate() && new Date().getFullYear() === year && new Date().getMonth() === month){
      
      days += `<div class="currentDate">${index1}</div>`
    } else {
      days += `<div>${index1}</div>`

    }

  }
    // next month
  for (let index2 = 1; index2 <= nextDays; index2++) {
      days += `<div class="nextMonthDays">${index2}</div>`
      calendarDays.innerHTML = days 
      
  }

              // V 2nd try 
  // for (let index = 1; index < daysOfMonth[month] + 1; index++) {
  //   let day = document.createElement("div")

  //   day.innerHTML = index 

  //   if(index === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()){
  //     days.classList.add("currentDate")
  //   }
  //   calendarDays.appendChild(days)
  // }

  // //                  V 1st try 
  // const monthDays = document.querySelector(".days")
  // monthDays.innerHTML = ""

  // let days = ""
  // // class="${index}DayOfMonth"

  // for (let index = 1; index <= daysOfMonth[date.getMonth()] + firstDay - 1; index++) {
    
  //   days += `<div>${index}</div>`
  //   monthDays.innerHTML = days

  //   //           V not apart of first try 
  //   // if(index === date.getUTCDate()){
  //     // console.log(index)
  //     // my current day with the class of current-day so the current can get the css
  //     // `<div>${index}</div>`.setAttribute("class", "currentDate")
      
  //   // }

  // }

}

function monthListFunc(){
  const monthList = document.querySelector(".monthList")
  const monthChange = document.querySelector(".changeMonth")

  monthsNames.forEach((element, index) => {
    let month = document.createElement("div")
    month.innerHTML = `<div>${element}</div>`
    month.onclick = () => {
      monthList.classList.remove("show")
      
      newCurrentMonth.value = index
      newCurrentDate.setMonth(index)
      // console.log(index)
      renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)
    }

    monthList.appendChild(month)
  })

  monthChange.onclick = () => {
    monthList.classList.add("show")
  }

}


function changeYearFunc(){

  const prevButton = document.querySelector("#prevButton")
  const nextButton = document.querySelector("#nextButton")

  prevButton.onclick = () => {
    --newCurrentYear.value
    // console.log(newCurrentYear.value)
    newCurrentDate.setFullYear(newCurrentYear.value)
    renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)

  }


  nextButton.onclick = () => {
    ++newCurrentYear.value
    newCurrentDate.setFullYear(newCurrentYear.value)
    renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)

  }
}


let newCurrentDate = new Date()
let newCurrentMonth = {value: newCurrentDate.getMonth()}
let newCurrentYear = {value: newCurrentDate.getFullYear()}

// console.log(newCurrentMonth)
// console.log(newCurrentYear)

document.addEventListener('DOMContentLoaded', () => {
  // console.log('DOM fully loaded and parsed')
  
  renderDateInfo()

  monthListFunc()

  changeYearFunc()

  renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)


})
