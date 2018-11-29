
const request = require('request');
const argv = require('yargs').argv;
const userInfo = require('./user');

const userId = argv.id;

userInfo.getUser(userId);
