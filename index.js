
var katzDeliLine = []


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}


function nowServing(deliLine){
  if(deliLine[0] === undefined){
    return 'There is nobody waiting to be served!'
  }
  else {
  return 'Currently serving ' + deliLine[0] + '.'
  deliLine.shift()
}
}

function currentLine(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return 'The line is currently empty.'
  }
  else{
    var deliLine = []
    for (var i = 0; i < katzDeliLine.length; i++){
      var line = katzDeliLine[i]
      var number = i + 1
      deliLine.push(' ' + number + '. ' + line)
    }
}
  return 'The line is currently:' + deliLine
}
