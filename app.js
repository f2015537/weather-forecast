const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    const { address, latitude, longitude } = results
    console.log(address)
    weather.getWeather(latitude, longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage)
      } else {
        const { temperature, apparentTemperature } = weatherResults
        console.log(`It's currently ${temperature} degrees celcius but it feels like ${apparentTemperature} degrees celcius`)
      }
    })
  }
})
