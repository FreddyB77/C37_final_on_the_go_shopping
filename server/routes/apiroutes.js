const express = require('express'),
  router = new express.Router(),
  axios = require('axios');

router.get('/products/:upc', async (req, res) => {
  const { upc } = req.params;

  try {
    const { data } = await axios.get(
      `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`
    );

    const productArray = [];

    data.items.map((item) => {
      productArray.push({
        upc: item.upc,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.lowest_recorded_price,
        image: item.images[0],
        quantity: 1
      });
    });

    res.send(productArray);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/products/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.upcitemdb.com/prod/trial/search?s=${query}&match_mode=0&type=product`
    );
    const productsArray = [];

    data.items.map((item) => {
      productsArray.push({
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.lowest_recorded_price,
        image: item.images[0],
        upc: item.upc
      });
    });
    console.log(productsArray)
    res.send(productsArray);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
