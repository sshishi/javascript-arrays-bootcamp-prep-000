var chocolateBars = [ "snickers" , "hundred grand" , "kitkat" , "skittles"]

function addElementToBeginningOfArray(){
//chocolateBars.unshift("Philadelphia")
chocolateBars.push("Philadelphia")

}

function destructivelyAddElementToBeginningOfArray(){
  ["DC",  ...chocolateBars]
}
