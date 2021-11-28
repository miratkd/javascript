let countrys = ['tuvalu', 'india', 'usa', 'indonesia', 'monaco']
countrys.pop()
countrys.push('pakistain')
countrys.shift()
countrys.unshift('china')
console.log(countrys.every(element => element.length > 3))

