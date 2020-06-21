const express = require('express');
const router = new express.Router();
const axios = require('axios');

router.post('/location/mobile', (req, res) => {
  //console.dir(req.body)
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
      // .then(res.json(apiData));
    })
    .catch((error) => console.error(error));
});

// LOCATION SEARCH BY ZIP
router.get('/location/zip/:zip', (req, res) => {
  console.log(req.params.zip)
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
      // .then(res.json(apiData));
    })
    .catch((error) => console.error(error));
});

module.exports = router;
