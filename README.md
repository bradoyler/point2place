# Point2Place
Library & CLI for converting longlat coordinates to a place (reverse geocoding without an api)

### CLI
```sh
npx point2place --longlat 30,30
```

![term](https://pbs.twimg.com/media/DO9TxYGWkAUAMey.jpg:large)

### Data files used:
- [AtlasMake: world-countries](https://github.com/bradoyler/atlas-make/tree/master/world-countries)
- [AltasMake: world-places](https://github.com/bradoyler/atlas-make/tree/master/world-places)


#### Tips:
- 1 way to get your machines current location (Long-Lat coordinates)
```
$ brew cask install corelocationcli
$ CoreLocationCLI -format "%longitude,%latitude"
```

- 2 run tests:
```
$ npm test
```
