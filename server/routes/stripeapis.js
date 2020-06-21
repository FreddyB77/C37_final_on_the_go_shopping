const express = require('express'),
  router = new express.Router(),
  auth = require('../middleware/auth');

(keySecret = process.env.STRIPE_API_KEY_SECRET),
  (stripe = require('stripe')(keySecret));

// CREATE A STRIPE CHARGE TO AN ACCOUNT. WILL SAVE CREDIT CARD INFO WHEN PAID
router.post('/charge', auth, async (req, res) => {
  const { creditCard, expiration, cvv } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: req.user.email
    });
    req.user.creditCard = creditCard;
    req.user.expiration = expiration;
    req.user.cvv = cvv;
    await req.user.save();
    res.json(paymentIntent.amount);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
