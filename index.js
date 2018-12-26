
function takeANumber(listOfCustomers, newPerson){
  var newList = []
  for( var i = 0; i < listOfCustomers.length; i++){
    var people = listOfCustomers[i]
    newList += people
  }
  newList += newPerson
  return 'Welcome, ' + newPerson + '. You are number ' + (newList.indexOf(newPerson) + 1) +' in line.'
}
