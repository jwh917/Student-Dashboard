// calc section
class Calculator{
  constructor(displayScreen, currentCalc){
    this.displayScreen = displayScreen
    this.currentCalc = currentCalc
    this.clearScreen()
  }

  clearScreen(){
    this.displayScreenValue = ""
    this.currentCalcValue = ""
    this.operator = undefined
  }

  renderNum(num){
    if(num === "." && this.displayScreenValue.includes(".") ) 
    // if . is pressed will stop adding .
    return 
    this.displayScreenValue = this.displayScreenValue.toString() + num.toString()
  }

  chooseOperator(operator){
    if(this.displayScreenValue === "")
    // if display is empty stop chooseOperator from being used
    return
    if(this.currentCalcValue !== ""){
      // if current calc is emtpy stop chooseOperator from being used
      this.equal()
    }

    this.operator = operator
    this.currentCalcValue = `${this.displayScreenValue} ${operator}`
    this.displayScreenValue = ""
  }

  equal(){
    let equal
    const display = parseFloat(this.displayScreenValue)
    const current = parseFloat(this.currentCalcValue)

    if(isNaN(display) || isNaN(current))
    //display and current are not numbers it doesnt run
    return

    switch(this.operator){
      case "+":
        equal = current + display
        console.log(equal)
        break

      case "-":
        equal = current - display
        break

      case "*":
        equal = current * display
        break

      case "/":
        equal = current / display
        break
      
      // if the case doesnt macth + - * / it will not run
      default:
        return
    }

    this.displayScreenValue = equal
    this.operator = undefined
    this.currentCalcValue = ""
  }

  updateScreen(){
    this.displayScreen.value = this.displayScreenValue
    this.currentCalc.value = this.currentCalcValue
  }
}

const calcButtonC = document.getElementById("calcButtonC")
const calcButtonsNum = document.querySelectorAll(".calcButtonNum")
const calcButtonsOp = document.querySelectorAll(".calcButtonOp")
const calcButtonEq = document.getElementById("calcButtonEq")
const displayScreen = document.getElementById("result")
const currentCalc = document.getElementById("current-calc")
const calculator = new Calculator(displayScreen, currentCalc)

calcButtonsNum.forEach(button => {
  button.addEventListener("click", () => {
    console.log(button.value)
    calculator.renderNum(button.value)
    calculator.updateScreen()
  })
})

calcButtonsOp.forEach(button => {
  button.addEventListener("click", () => {
    console.log(button.value)
    calculator.chooseOperator(button.value)
    calculator.updateScreen()
  })
})

calcButtonEq.addEventListener("click", button => {
  calculator.equal()    
  calculator.updateScreen()
})

calcButtonC.addEventListener("click", button => {
  calculator.clearScreen()    
  calculator.updateScreen()
})