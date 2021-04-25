'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/394321329212/SQS-queue',
  handleMessage: async (message) => {
    console.log(message);
  }
});
app.start();
