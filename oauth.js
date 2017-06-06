// https://console.developers.google.com create a client id, clientSecret, callbackURL
var ids = {
    google: {
        clientID: 'clientID',
        clientSecret: 'clientSecret',
        callbackURL: 'http://localhost:5000/auth/google/callback'
    }
};

module.exports = ids;