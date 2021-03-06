const request = require("request");

const geocode = (adress, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    adress
  )}.json?access_token=pk.eyJ1IjoieWFzbWluc2RjYXN0cm8iLCJhIjoiY2t1bXdhYWtmM3dzNjJvbzgzZjFiMm1hYyJ9.blHdo46KvuoiZE0VhIBzoA&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    try {
      if (body.features.length === 0) {
        callback("Unable to find location, try another search", undefined);
      }

      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    } catch (error) {
      callback("Unable to connect to location services", undefined);
    }
  });
};

module.exports = geocode;
