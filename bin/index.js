#!/usr/bin/env node

const program = require('commander')
const p2p = require('../index')

function point (val) {
  const [long, lat = 0] = val.split(',')
  return [parseFloat(long), parseFloat(lat)]
}

program
  .option('-l, --longlat <point>', 'Longitude,Latitude', point)
  .parse(process.argv)

const { longlat } = program
if (longlat) {
  console.log('longlat:', longlat)
  console.log(p2p(longlat))
} else {
  console.error('No -l Longitude,Latitude provided')
}
