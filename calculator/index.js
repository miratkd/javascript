let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let plus = () => document.getElementById('sum-el').textContent = 'Sum: ' + (num1 + num2)
let menus = () => document.getElementById('sum-el').textContent = 'Sum: ' + (num1 - num2)
let multiplay = () => document.getElementById('sum-el').textContent = 'Sum: ' + (num1 * num2)
let divide = () => document.getElementById('sum-el').textContent = 'Sum: ' + (num1 / num2)