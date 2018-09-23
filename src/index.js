const request = require('request-promise');
const cheerio = require('cheerio');


const fetch = (uri) => {

};

exports.scan = function (event, context, callback) {
    /*
    Premise:
    - fetch a URL and capture its response code and body
    - store the response code and body in dynamodb
     */
    console.log('event', event);
    request('https://devinmy.team', function(error, response, body){
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body length:', body.length);
        callback('done');
    });
    console.log('did a scan');

};