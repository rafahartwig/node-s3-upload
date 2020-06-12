const AWS = require('aws-sdk');

const validator = (config) => {
    // add validation to file upload
    return true
}

module.exports.uploadFile = (config) => {

    if(!validator(config)) return false;

    const s3 = new AWS.S3({
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region
    });

    // Setting up S3 upload parameters
    const params = {
        Bucket: config.bucket,
        Key: config.key, // File name you want to save as in S3
        Body: config.body
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) throw err; 
        console.log(`File uploaded successfully. ${data.Location}`);
    });
}
