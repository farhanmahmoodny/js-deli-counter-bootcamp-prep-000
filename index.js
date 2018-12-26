
function takeANumber(currentNumber, newPerson){
  var katzDeliLine = []
  katzDeliLine.push(newPerson)
  for (var i = 0; i < katzDeliLine.length; i++){
    var line = katzDeliLine[i]
    var next = line[i]
    var number = currentNumber + 1

  return 'Welcome, ' + next + '. You are number ' + number + ' in line.'
}
}
