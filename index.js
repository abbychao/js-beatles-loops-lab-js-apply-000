// add solution here
function theBeatlesPlay (musicians, instruments) {
  var result = []
  var i 
  for (i = 0; i<musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    result.push(string)
  }
  return result
}

function johnLennonFacts(facts) {
  var i 
  var result = []
  while(i<facts.length) {
    result.push(facts[i] + "!!!")
    i++
  }
  return result 
}