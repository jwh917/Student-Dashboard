// calc section

class Calculator{
  constructor(displayScreen, currentCalc){
    this.displayScreen = displayScreen
    this.currentCalc = currentCalc
    this.clearScreen()
    
  }

  clearScreen(){
    this.displayScreenInput = ""
    this.currentCalcInput = ""
    this.operator = ""
  }

  renderNum(num){
    if(num === "." && this.displayScreenInput.includes(".") ) return
    this.displayScreenInput = this.displayScreenInput + num
  }

  chooseOperator(operator){
    if(this.displayScreenInput === "") return
    if(this.currentCalcInput !== ""){
      this.equal()
    }
    this.operator = operator
    this.currentCalcInput = `${this.displayScreenInput} ${operator}`
    this.displayScreenInput = ""
  }

  equal(){
    let equal = 0
    const display = parseFloat(this.displayScreenInput)
    const current = parseFloat(this.currentCalcInput)
    switch(this.operator){
      case "+":
        equal = current + display
        break
      case "-":
        equal = current - display
        break
      case "*":
        equal = current * display
        break
      case "/":
        equal = current / display
    }
    this.displayScreenInput = equal
    this.operator = undefined
    this.currentCalcInput = ""
  }

  updateScreen(){
    this.displayScreen.value = this.displayScreenInput
    this.currentCalc.value = this.currentCalcInput
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
    calculator.renderNum(button.value)
    calculator.updateScreen()
  })
})

calcButtonsOp.forEach(button => {
  button.addEventListener("click", () => {
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