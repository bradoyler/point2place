const point2place = require('../index')

console.log(
  point2place([-100, 40]),
  point2place([37, 55]),
  point2place([18.42, -33.9]),
  point2place([30.559, 22.937]),
  point2place([40, -40])
)

// output:
// { name: 'United States of America' }
// { name: 'Russia' }
// { name: 'South Africa' }
// { name: 'Egypt' }
// { name: 'not found' }
