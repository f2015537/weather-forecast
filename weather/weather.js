const request = require('request')

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/a5647cbfd849e1f192139ab3cd1d78ed/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('unable to connect to the forecast.io server')
    } else if (response.statusCode >= 400) {
      callback('Invalid url')
    } else {
      const { temperature, apparentTemperature } = body.currently
      callback(undefined, {
        temperature,
        apparentTemperature
      })
    }
  })
}

module.exports = {
  getWeather
}
