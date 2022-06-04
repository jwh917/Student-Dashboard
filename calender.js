// calendar js

const date = new Date()

const monthsNames = 
[
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

function renderDateInfo(){
  const dateInfoDiv = document.querySelector(".dateInfoStr")
  let dateInfo = document.createElement("span")
  dateInfo.setAttribute("id", "todaysDate")
  dateInfo.innerHTML = date.toDateString()
  dateInfoDiv.appendChild(dateInfo)
}

function renderCalendar(newDate, month, year){
  let monthChanger = document.querySelector("#month")
  let calendarHeaderYear = document.querySelector("#year")
  monthChanger.innerHTML = monthsNames[newDate.getMonth()]
  calendarHeaderYear.innerHTML = newDate.getFullYear()
  let calendarDays = document.querySelector(".days")
  calendarDays.innerHTML = ""
  newDate.setDate(1)
  const firstDayIndex = newDate.getDay()
  const currLastDay = new Date(year, month + 1, 0).getDate()
  const prevLastDay = new Date(year, month, 0).getDate()
  const lastDayIndex = new Date(year, month + 1, 0).getDay()
  const nextDays = 7 - lastDayIndex - 1

  let days = ""

  for (let index0 = firstDayIndex; index0 > 0; index0--) {
      days += `<div class="previousMonthDays">${prevLastDay - index0 + 1}</div>`
  }

  for (let index1 = 1; index1 <= currLastDay; index1++) {
    if(index1 === new Date().getDate() && new Date().getFullYear() === year && new Date().getMonth() === month){      
      days += `<div class="currentDate">${index1}</div>`
    } else {
      days += `<div>${index1}</div>`
    }
  }

  for (let index2 = 1; index2 <= nextDays; index2++) {
      days += `<div class="nextMonthDays">${index2}</div>`
      calendarDays.innerHTML = days     
  }
}

let newCurrentDate = new Date()
let newCurrentMonth = {value: newCurrentDate.getMonth()}
let newCurrentYear = {value: newCurrentDate.getFullYear()}

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
    newCurrentDate.setFullYear(newCurrentYear.value)
    renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)
  }
  nextButton.onclick = () => {
    ++newCurrentYear.value
    newCurrentDate.setFullYear(newCurrentYear.value)
    renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)
  }
}

document.addEventListener('DOMContentLoaded', () => {  
  renderDateInfo()
  renderCalendar(newCurrentDate, newCurrentMonth.value, newCurrentYear.value)
  monthListFunc()
  changeYearFunc()
})