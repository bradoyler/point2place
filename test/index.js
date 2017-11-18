const point2place = require('../index')

const testUS = point2place([-100, 40])
const testRussia = point2place([37, 55])
const testFiji = point2place([178.0636596, -17.9473807])

console.log('US ------- \n', testUS)
console.log('Russia ------- \n', testRussia)
console.log('Fiji -------- \n', testFiji)
