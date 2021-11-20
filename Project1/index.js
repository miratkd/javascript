// let  count = 0
// let first = true
// let increment = () => document.getElementById('count-el').textContent = ++count
// let save = () => {
//   if (first) document.getElementById('save-el').textContent += ' ' + count
//   else document.getElementById('save-el').textContent += ' - ' + count
//   first = false
//   document.getElementById('count-el').textContent = count = 0
// }

let myPoint = 3

let add3Point = () => {
  myPoint += 3
}

let remove1Point = () => {
  myPoint--
}

add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()
console.log(myPoint)