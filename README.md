# Point2Place
Library & CLI for converting longlat coordinates to a place (reverse geocoding without an api)

## CLI

```javascript
npx point2place --longlat -100,40
/*
{
country: {
    id: 'USA',
    continent: 'North America',
    name: 'United States of America',
    name2: 'United States',
    population: 326625791,
    income: '1. High income: OECD'
  },
nearestCity: {
    name: 'McCook',
    state_province: 'Nebraska',
    population: 8012,
    sovereign: 'United States of America',
    distanceKm: 57.955918817615704
  }
}
*/
```

## Data files used:
- [AtlasMake: world-countries](https://github.com/bradoyler/atlas-make/tree/master/world-countries)
- [AltasMake: world-places](https://github.com/bradoyler/atlas-make/tree/master/world-places)

### Tips
1 way to get your machines current location (Long-Lat coordinates)
```
$ brew cask install corelocationcli
$ CoreLocationCLI -format "%longitude,%latitude"
```
