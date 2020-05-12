const jwt = require('jsonwebtoken');
const Users = require('../models/users');

var authService = {
    signUser: function(users) {
        const token = jwt.sign({
            UserName: user.UserName,
            UserId: user.UserId
            
        }, 'secretkey',
        {
            expiresIn: '1h'
        });
        return token;
    }
}

module.exports = authService;