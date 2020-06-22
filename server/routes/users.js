const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

// ***********************************************//
// Create a user
// ***********************************************//

router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send({ error: e.message });
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
    return res.status(400).send({ error: e.message });
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
    res.status(500).send({ error: e.message });
  }
});

// **********************************************//
// Get current user
// ***********************************************//
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
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
    res.status(500).send({ error: 'Invalid updates!' });
  }
});

// ***********************************************//
// Logout a user
// ***********************************************//

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.token = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save({ message: 'Successfully logged out' });
    res.send();
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// ***********************************************//
// Login a user
// ***********************************************//
router.post('/users/login', async (req, res) => {
  try {
    const profile = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const user = {
      firstName: profile.firstName,
      email: profile.email
    };
    const token = await profile.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
