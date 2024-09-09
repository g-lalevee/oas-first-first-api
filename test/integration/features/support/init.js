'use strict';

const apickli = require('../../apickli/apickli.js');
const {defineSupportCode} = require('cucumber');


defineSupportCode(function({Before}) {
    Before(function() {
    // ******** ADD HERE APIGEE PROXY ENDPOINT HOSTNAME **********
        this.apickli = new apickli.Apickli('https', 'api_url');
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});
defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000); // this is in ms
});
