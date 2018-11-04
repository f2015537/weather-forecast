const request = require('request')
const yargs = require('yargs')

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

const encodedAddress = encodeURIComponent(argv.a)

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=G93bwlH2LGgllgg92mD3LMTPxdky9pAQ&location=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].providedLocation.location}`)
    console.log(`lat:${body.results[0].locations[0].latLng.lat}`)
    console.log(`long:${body.results[0].locations[0].latLng.lng}`)
})