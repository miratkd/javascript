let myLeads = []
let inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')

let save = ()=> {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  renderList()
}

let renderList = () => {
  let list = ''
  myLeads.forEach(lead => list += '<li><a href="'+lead+'" target="_blank">'+lead+'</a></li>')
  ulEl.innerHTML = list
}