const express = require('express'),
  router = new express.Router(),
  auth = require('../middleware/auth'),
  Receipt = require('../models/receipt');

//   GET ALL RECEIPTS
router.get('/receipts', auth, async (req, res) => {
  const match = {};
  try {
    await req.user
      .populate({
        path: 'receipts',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.send(req.user.receipts);
  } catch (e) {
    res.status(500).send();
  }
});

// CREATE A RECEIPT
router.post('/receipts', auth, async (req, res) => {
  const receipt = new Receipt({
    ...req.body,
    owner: req.user._id
  });
  try {
    receipt.save();
    res.status(201).send(receipt);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
