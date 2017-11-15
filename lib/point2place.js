const geo = require('d3-geo')
const geojson = require('../data/countries.geo.json')

module.exports = function place (point) {
  const match = geojson.features.find(feature => geo.geoContains(feature, point))
  if (match) {
    return match.properties
  }
  return { name: 'not found' }
}
