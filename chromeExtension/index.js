let myLeads
if (JSON.parse(localStorage.getItem('myLeads'))) myLeads = JSON.parse(localStorage.getItem('myLeads'))
else myLeads = []
let inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')
let inputBtn = document.getElementById('input-btn')
let deleteBtn = document.getElementById('delete-btn')

let renderList = () => {
  let list = ''
  myLeads.forEach(lead => list += '<li><a href="'+lead+'" target="_blank">'+lead+'</a></li>')
  ulEl.innerHTML = list
}
let save = ()=> {
  console.log(myLeads)
  myLeads.push(inputEl.value)
  inputEl.value = ''
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderList()
}
let deleteAll = () => {
  localStorage.removeItem('myLeads')
  myLeads = []
  renderList()
}
renderList()
inputBtn.addEventListener('click', save);
deleteBtn.addEventListener('dblclick', deleteAll)