const d3 = require('d3-geo')
const countries = require('../data/world-countries-110m.json')
const geoCountriesMaritime = require('@geo-maps/countries-maritime-10km')
const worldPlaces = require('../data/world-places.json')

function getCountry (point) {
  const match = geoCountriesMaritime().features.find(feature => d3.geoContains(feature, point))
  if (match) {
    const { A3: id } = match.properties
    const country = countries.features.find(country => country.properties.ISO_A3 === id)
    if (country) {
      const {
        CONTINENT: continent,
        NAME: name,
        NAME_LONG: name2,
        POP_EST: population,
        INCOME_GRP: income
        // POSTAL, ADMIN,
      } = country.properties
      return { id, continent, name, name2, population, income }
    }
  }
  return { none: 'not within a border' }
}

function place (point) {
  const country = getCountry(point)
  const cities = []
  worldPlaces.features.forEach(feature => {
    const radian = d3.geoDistance(point, feature.geometry.coordinates)
    const distanceKm = radian * 6371
    // const distanceMi = radian * 3959
    const { adm0name, adm1name, name, pop_max } = feature.properties
    cities.push({ adm0name, adm1name, pop_max, name, radian, distanceKm })
  })

  const sortedCities = cities.sort((a, b) => a.radian - b.radian)
  const city = sortedCities[0] || {}
  const { name, adm1name: state_province, pop_max: population, adm0name: sovereign, distanceKm } = city
  const nearestCity = { name, state_province, population, sovereign, distanceKm }
  return { country, nearestCity }
}

module.exports = place
