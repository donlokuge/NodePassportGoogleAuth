var express = require('express');
var passport = require('passport');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/account', ensureAuthenticated, function (req, res) {
    res.render('account', {user: req.user});
});

router.get('/auth/google',
        passport.authenticate('google', {scope: [
                'https://www.googleapis.com/auth/userinfo.email',              
            ]}
        ));

router.get('/auth/google/callback',
        passport.authenticate('google', {failureRedirect: '/error'}),
        function (req, res) {
            res.redirect('/account');
        });
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

// test authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log('ensureAuthenticated', false);
    res.redirect('/');
}
module.exports = router;
