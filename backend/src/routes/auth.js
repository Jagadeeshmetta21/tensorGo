const express = require('express');
const passport = require('passport');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: 'http://localhost:3001/login' }),
  authController.googleAuthCallback
);

module.exports = router;