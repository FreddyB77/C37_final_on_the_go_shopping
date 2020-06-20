const express = require('express'),
  router = new express.Router(),
  axios = require('axios'),
  mongoose = require('mongoose'),
  Product = require('../models/product');

router.get('/products/:upc', async (req, res) => {
  const { upc } = req.params;
  try {
    // IF THE PRODUCT IS NOT IN THE DATABASE THEN DO THIS
    const product = await Product.exists({ upc });
    if (!product) {
      try {
        const { data } = await axios.get(
          `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`
        );
        const productArray = [];
        console.log(data)
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

        // SENDING THE PRODUCT FROM THE UPC API TO OUR DATABASE FOR API CALLS
        const product = new Product(productArray[0]);
        console.log(product);
        try {
          await product.save();
          res.send(product);
          console.log('product saved to database', productArray[0]);
        } catch (e) {
          console.error(e);
        }
      } catch (e) {
        res.status(500).send();
      }
    }

    // IF THE PRODUCT IS IN THE DATABASE THEN DO THIS
    else {
      try {
        console.log("product in database")
        const product = await Product.find({ upc });
        res.json(product);
      } catch (e) {
        res.status(500).send();
      }
    }
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
        image: item.images[0]
      });
    });

    res.send(productsArray);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
