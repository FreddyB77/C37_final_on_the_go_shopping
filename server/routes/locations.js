const express = require('express');
const router = new express.Router();
const axios = require('axios');

// SEARCH LOCATION USING MOBILE'S
// GEOCACHING FEATURE.
// SEARCHES BY GPS COORDINATES
// PROVIDED BY THE PHONE
router.post('/location/mobile', (req, res) => {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=grocery&latitude=${req.body.lat}&longitude=${req.body.long}&radius=2000&limit=8&sort_by=distance`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
      }
    )
    .then((response) => {
      let apiData = [];
      response.data.businesses.map((store) => {
        const name = store.name;
        const address = store.location.display_address;
        const distance = (store.distance * 0.000621371).toFixed(2);
        const stores = { name, address, distance };
        apiData.push(stores);
      });
      res.json(apiData);
    })
    .catch((error) => console.error(error));
});

// LOCATION SEARCH BY ZIP
// WILL RETURN THE FIRST 8 STORES
// SORTS BY CLOSEST
router.get('/location/zip/:zip', (req, res) => {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?term=grocery&location=${req.params.zip}&radius=2000&limit=8&sort_by=distance`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`
        }
      }
    )
    .then((response) => {
      let apiData = [];
      response.data.businesses.map((store) => {
        const name = store.name;
        const address = store.location.display_address;
        const distance = (store.distance * 0.000621371).toFixed(2);
        const stores = { name, address, distance };
        apiData.push(stores);
      });
      res.json(apiData);
    })
    .catch((error) => console.error(error));
});

module.exports = router;
