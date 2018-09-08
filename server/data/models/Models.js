(function () {
    'use strict';

    var UsersModel = require('../models/User');

    module.exports.init = function () {
        // sort by appropriate order of invoke
        UsersModel.init();
    };
}());