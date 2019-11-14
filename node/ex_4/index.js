const oneLinerJoke = require('one-liner-joke')

const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body)
console.log(getRandomJoke.tags.join(', '))