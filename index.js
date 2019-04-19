// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  var i 
  for (i = 0; i<musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  var i 
  var result = []
  while(i<facts.length) {
    result[i].push(facts[i] + "!!!")
    i++
  }
  return result 
}