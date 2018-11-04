// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

// a5647cbfd849e1f192139ab3cd1d78ed

const request = require('request')

request({
    url: 'https://api.darksky.net/forecast/a5647cbfd849e1f192139ab3cd1d78ed/28.58976,75.42578',
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('unable to connect to the forecast.io server')
    } else if(response.statusCode >= 400) {
        console.log('Invalid url request')
    } else {
        console.log(body.currently.temperature, 'degrees celcius')
    }
})