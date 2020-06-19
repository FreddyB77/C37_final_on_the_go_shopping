const express = require('express'),
  router = new express.Router(),
  keySecret =
    'sk_test_51GuNZtCRd2qXbMM9hyNRjj9wMWlg4FanE7MRo8dd0Zs6LbclCuwYxH3ps1dWajrUEkjpeuZVWIUSrQCxFEdiOIlu00RzQJ45pG',
  stripe = require('stripe')(keySecret);

const keyPublishable =
  'pk_test_51GuNZtCRd2qXbMM94JZgbCEFl6yK70M8iPx2GHnhbTKJJpSpPCx98muPIIbbb5vnzHb6kLY9Xnajj7ffH84WjvWq00pbdsyjU4';

router.post('/charge', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: req.body.email
    });
    res.json(paymentIntent);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
