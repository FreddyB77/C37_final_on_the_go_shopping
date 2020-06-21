const express = require('express'),
  router = new express.Router(),
  axios = require('axios'),
  Product = require('../models/product');

// PULL PRODUCT BY SEARCHING THE UPC
// WILL TRY TO PULL FROM DATABASE FIRST
// TO ACCOMODATE FOR API CALL AMOUNT RESTRICTIONS
// IF THE ITEM IS IN THE DATABASE IT WILL PULL FROM THERE
// IF THE ITEM IS NOT IN DATABASE THEN IT WILL
// DO AN UPC SEARCH ON THE API ITSELF
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
        try {
          await product.save();
          res.send(product);
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

// SEARCH THE DATABASE BY QUERYING SEARCH TERMS
// WILL FILTER TEARMS TO THE CATEGORY OF "GROCERY"
// THIS FILTER IS BEING IN PLACE BECAUSE OF THE
// FACT THIS IS A GLOBAL API AND NOT A STORE-SPECIFIC
// IRL WOULD USE API SPECIFIC TO STORE AND NOT GLOBAL

router.get('/products/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.upcitemdb.com/prod/trial/search?s=${query}&category=grocery&match_mode=0&type=product`
    );
    const productsArray = [];

    data.items.map((item) => {
      productsArray.push({
        upc: item.upc,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.lowest_recorded_price,
        image: item.images[0],
        quantity: 1
      });
    });

    res.send(productsArray);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
