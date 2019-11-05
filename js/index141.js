const tripExpenses = [465, 394324329, 40]

const budget = tripExpenses.reduce(function(a,c) {
  return a + c
})

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`)
console.log(`Total trip budget ${budget}`)