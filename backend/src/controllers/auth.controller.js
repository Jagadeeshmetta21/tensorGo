const passport = require('passport');

const authController = {
  googleAuthCallback: (req, res) => {
    // Handle the Google OAuth callback
    // Store the authenticated user's information in the session or database
    const user = req.user;
    console.log(user
    )
    // Redirect or respond with user data
    res.redirect(`http://localhost:3001/invoices?userId=${user.id}`);
  },
};

module.exports = authController;