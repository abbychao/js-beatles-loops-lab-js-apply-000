// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (i = 0; i<musicians.length; i++) {
    var string = `${musicians[0]} plays ${instruments[0]}`
    array.push(string)
    return array
  }
}

function johnLennonFacts(facts) {
  while(i<facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts 
}