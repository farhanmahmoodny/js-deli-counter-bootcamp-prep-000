
function takeANumber(newPerson){
var currentCustomers = []
currentCustomers.push(newPerson)
for(var i = newPerson; i < currentCustomers.length; i++ ){
console.log('Welcome, ' + currentCustomers[i] + '. You are number ' + (currentCustomers.indexOf(currentCustomers[i]) + 1) + ' in line.')
}
}
