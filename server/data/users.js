(function () {
    'use strict';

    let encryption = require('../helpers/encryption.js');
    let User = require('mongoose').model('User');

    function getByUserName(username) {
        let promise = new Promise(function(resolve, reject) {
            User.findOne({username: username}, function(err, user) {
                if (err) {
                    return reject(err);
                }

                resolve(user);
            });
        });

        return promise;
    }

    module.exports = {
        getByUserName: getByUserName
    };
}());