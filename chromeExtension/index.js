let myLeads = JSON.parse(localStorage.getItem('myLeads'))
let inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')
let inputBtn = document.getElementById('input-btn')

let renderList = () => {
  let list = ''
  myLeads.forEach(lead => list += '<li><a href="'+lead+'" target="_blank">'+lead+'</a></li>')
  ulEl.innerHTML = list
}
let save = ()=> {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderList()
}
renderList()
inputBtn.addEventListener('click', save);