"use strict";
const ctrl = require('../controllers/s3.controller.js');
module.exports = function(app) {
    app.get('api/v1/s3/getfile', ctrl.getObjectS3); //Automatically passes req/res.
    app.post('api/v1/s3/uploadfile', ctrl.uploadObjectS3); //Automatically passes req/res.
};