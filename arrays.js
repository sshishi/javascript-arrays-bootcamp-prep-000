var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]


function addElementToBeginningOfArray(){
  chocolateBars.unshift("ppp")
}

function destructivelyAddElementToBeginningOfArray(){
  var chocolateBars = ["Philadelphia",  ...chocolateBars]
}
function accessElementInArray(){
  console.log(chocolateBars[0])
}