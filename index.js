
var katzDeliLine = []


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}


function nowServing(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!'
  }
  else {
  return 'Currently serving ' + katzDeliLine[0] + '.'
  katzDeliLine.shift()
}
}

function currentLine(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return 'The line is currently empty.'
  }
  else{
    for (var i = 0; i < katzDeliLine.length; i++){
      var line = katzDeliLine[i]
      var deliLine =[]
      deliLine += (i + 1) line
    }
  }
  return 'The line is currently: ' + deliLine
}
