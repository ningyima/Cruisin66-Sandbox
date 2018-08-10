var models = require('../models/user.js');
var bluebird = require('bluebird');

users: {
  login: function(req, res) {
    models.users.get((err, results) => {
      if (err) {
        throw 'failed to get users';
      }

      console.log(results);
      res.json(results);
    });
  }
  // logout: function(req, res) {},
  // signup: function(req, res) {}
}