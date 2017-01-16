"use strict";

const AWS = require('aws-sdk');
const fs = require('fs');
let controller = {
    getObjectS3: function(req, res) {

        let s3 = new AWS.S3();
        let params = {
            Bucket: 'myBucket',
            Key: req.body.key
        };
        let doc = fs.createWriteStream(req.body.filepath);
        s3.getObject(params, (err, data) => {
                if (err) {
                    return res.status(401).send(err);
                }
            })
            .createReadStream()
            .pipe(res);


    },
    uploadObjectS3: function(req, res) {

        let body = fs.createReadStream(req.body.filepath);
        var s3obj = new AWS.S3({
            params: {
                Bucket: 'myBucket',
                Key: req.body.key
            }
        });
        s3obj.upload({
                Body: body
            })
            .send(function(err, data) {
                if (err) {
                    res.status(401).send(err);
                }
                res.status(200).send(data);
            });

    }
};
module.exports = controller;