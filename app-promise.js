const yargs = require('yargs')
const axios = require('axios')

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

const encodedAddress = encodeURIComponent(argv.address)
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=G93bwlH2LGgllgg92mD3LMTPxdky9pAQ&location=${encodedAddress}`

axios
  .get(geocodeUrl)
  .then(res => {
    if (!res.data) throw new Error('Invalid location')
    console.log(res.data.results[0].providedLocation.location)
    const { lat, lng } = res.data.results[0].locations[0].latLng
    const weatherUrl = `https://api.darksky.net/forecast/a5647cbfd849e1f192139ab3cd1d78ed/${lat},${lng}?units=si`
    return axios.get(weatherUrl)
  })
  .then(res => {
    const { temperature, apparentTemperature } = res.data.currently
    console.log(`It's currently ${temperature} degrees celcius but it feels like ${apparentTemperature} degrees celcius`)
  })
  .catch(console.log)
