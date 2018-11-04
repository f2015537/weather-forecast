const request = require('request')
const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=G93bwlH2LGgllgg92mD3LMTPxdky9pAQ&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error || !body || response.statusCode >= 400) {
      callback('Either the url is wrong or the location is invalid or the server is down')
    } else {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      })
    }
  })
}

module.exports = {
  geocodeAddress
}
