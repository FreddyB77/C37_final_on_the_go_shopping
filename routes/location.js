const express = require('express');
const router = new express.Router();

router.post('/location/', (req, res) => {
    //console.dir(req.body)
    axios
        .get(`https://api.yelp.com/v3/businesses/search?term=grocery&latitude=${req.body.lat}&longitude=${req.body.long}`, {
            headers: { 
                Authorization: `Bearer ${process.env.YELP_API_KEY}` 
            },
        }).then( (response) => {
            console.log('hit')
            let apiData = []
            response.data.businesses.map(store => {
                const name = store.name;
                const address = store.location.display_address;
                const distance = store.distance;
                const stores = { name: name, address: address,distance: distance}
                apiData.push(stores);
            })
            res.json(apiData)
        }).catch( error => console.error(error) )
});

module.exports = router;
