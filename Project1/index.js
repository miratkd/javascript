let  count = 0
let first = true
let increment = () => document.getElementById('count-el').textContent = ++count
let save = () => {
  if (first) document.getElementById('save-el').textContent += ' ' + count
  else document.getElementById('save-el').textContent += ' - ' + count
  first = false
  document.getElementById('count-el').textContent = count = 0
}