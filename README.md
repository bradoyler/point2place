<img width="100" src="https://user-images.githubusercontent.com/425966/33193263-697d6cd0-d095-11e7-98c5-22c35e49bcfd.jpg"/> __Point2Place__

Library & CLI for converting longlat coordinates to a place (reverse geocoding without an api)

[![npm](https://img.shields.io/npm/v/point2place.svg)]()
[![npm](https://img.shields.io/npm/dw/point2place.svg)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/bradoyler/point2place.svg)]()
[![npm](https://img.shields.io/npm/l/point2place.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/bradoyler/point2place.svg)]()

### CLI
```sh
$ npx point2place --longlat 30,30
```

<img width="400" src="https://pbs.twimg.com/media/DO9TxYGWkAUAMey.jpg:large" />

### Data files used:
- [Geo-Maps countries-maritime 10km](https://www.npmjs.com/package/@geo-maps/countries-maritime-10km)
- [AtlasMake: world-countries](https://github.com/bradoyler/atlas-make/tree/master/world-countries)
- [AltasMake: world-places](https://github.com/bradoyler/atlas-make/tree/master/world-places)

### Run tests:
```
$ npm test
```

#### Ways get your Long-Lat coordinates
- [CoreLocationCLI]() Mac OSX
```
$ brew cask install corelocationcli
$ CoreLocationCLI -format "%longitude,%latitude"
```
