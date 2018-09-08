(function() {
    "use strict";

    let mongoose = require('mongoose');
    let Models = require('../data/models/Models');

    module.exports = function(config) {
        mongoose.connect(config.db, { useNewUrlParser: true });
        let db = mongoose.connection;

        db.once('open', function(err) {
            if (err) {
                console.log('Database could not be opened: ' + err);
                return;
            }

            console.log('Database up and running...')
        });

        db.on('error', function(err){
            console.log('Database error: ' + err);
        });

        Models.init();
    };
}());