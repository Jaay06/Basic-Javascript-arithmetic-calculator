//basic javascript calculator
let num1 = prompt('Enter first number')
let num2 = prompt('Enter second number')
let operator = prompt('Enter operator')
let result = 0
if (operator === '+') {
  result = parseInt(num1) + parseInt(num2)
} else if (operator === '-') {
  result = parseInt(num1) - parseInt(num2)
} else if (operator === '*') {
  result = parseInt(num1) * parseInt(num2)
} else if (operator === '/') {
  result = parseInt(num1) / parseInt(num2)
} else {
  alert('Invalid operator')
}
alert(result)
console.log(result)
