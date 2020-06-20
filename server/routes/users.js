const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const User = require('../models/user');

// ***********************************************//
// Create a user
// ***********************************************//

router.post('/users', async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    console.log(user);
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// ***********************************************//
// Get all users
// ***********************************************//

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

// ***********************************************//
// Get a specific user
// ***********************************************//
router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    try {
      const user = await User.findById(_id);
      if (!user) {
        // The gotcha here is that this will only trigger if the param sent is 12 bits (12 character string)
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(400).send('Not a valid user id');
  }
});

// ***********************************************//
// Update a user
// ***********************************************//
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    // new: true will return the new user after it has been updated instead of the old user.
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// ***********************************************//
// Delete a user
// ***********************************************//
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// ***********************************************//
// Logout all devices
// ***********************************************//
router.post('/users/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// ***********************************************//
// Logout a user
// ***********************************************//

router.post('/users/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
