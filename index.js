'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const SNS = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:394321329212:caps-cloud';

const payload = {
  Message: "package is ready for pickup",
  TopicArn: topic,
};

SNS.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
