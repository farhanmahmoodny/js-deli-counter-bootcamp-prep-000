
var katzDeliLine = []
// function takeANumber(katzDeliLine, newPerson){
//   var newList = []
//   for( var i = 0; i < katzDeliLine.length; i++){
//     var people = katzDeliLine[i]
//     newList += people
//   }
//   newList += newPerson
//   return 'Welcome, ' + newList.slice(0, newList.lemgth-1) + '. You are number ' + (newList.indexOf(newPerson) + 1) +' in line.'
// }


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
