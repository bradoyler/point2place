const point2place = require('../index')

const testUS = point2place([-100, 40])
const testRussia = point2place([37, 55])
const testFiji = point2place([178.0636596, -17.9473807])
const testCanada = point2place([-79.060683, 43.114038])

console.log('US ------- \n', testUS)
console.log('Canada ------- \n', testCanada)
console.log('Russia ------- \n', testRussia)
console.log('Fiji -------- \n', testFiji)
