var AWS = require('aws-sdk');
var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
    if (err) {
       console.log("Error", err);
    } else {
        var bucket = data.Buckets.find(
            function (bucket) {
                return bucket.Name.match(/payan*/);
            }
        );
        console.log(bucket.CreationDate);
    }
 });
