(function() {
    'use strict';

    let mongoose = require('mongoose'),
        encryption = require('../../helpers/encryption');

    let Schema = mongoose.Schema;

    module.exports.init = function() {
        let userSchema = new Schema({
            username: {
                index: true,
                unique: true,
                type: String,
                validate: function (input) {
                    return /[0-9A-z]{6,}/.test(input);
                },
                required: true,
                require: '{PATH} is required',
                message: '{PATH} is not a valid username'
            },
            //salt: String,
            //hashPass: String
        });

        userSchema.method({
            authenticate: function(password) {
                if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });

        let User = mongoose.model('User', userSchema);

        User.find({}).exec(function(err, usersCollection) {
            if (err) {
                console.log('Cannot find users: ' + err);
                return;
            }
            //console.log(usersCollection);
            if (usersCollection.length === 0) {
                User.create({ username: 'g.yonchev', firstName: 'Georgi', lastName: 'Yonchev' });
                User.create({ username: 'useruser1', firstName: 'Tom', lastName: 'John' });
                User.create({ username: 'useruser', firstName: 'Jane', lastName: 'Morris' });
                console.log('Users added to the database...');
            }
        });
    };
}());