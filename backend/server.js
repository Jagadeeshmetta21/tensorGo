const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authRoutes = require('./src/routes/auth');
const invoicesRoutes = require('./src/routes/invoices');
const zapierRoutes = require('./src/routes/zapier');
const cors = require('cors')

const app = express();
app.use(cors());

// Configure Passport with Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: '178453880255-n6opphlh9tvsien508jldj9iu0i9lp2o.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you can handle the user profile and authentication logic
      // For example, you can find or create a user in your database
      const user = { id: profile.id, name: profile.displayName };
      return done(null, user);
    }
  )
);



// Use the routes
app.use('/auth', authRoutes);
app.use('/api/invoices', invoicesRoutes);
app.use('/api/zapier', zapierRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});