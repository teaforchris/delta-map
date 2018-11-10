/**
 index.js Serves as the local entry point for lambdas that can be run independantly of AWS components
 */

const lambdaLocal = require('lambda-local');

const lambdaToRun = typeof process.argv[2] !== 'undefined' ? process.argv[2] : '';

if ( !lambdaToRun.match(/scan/) ) {
    console.log('Which lambda would you like to run?');
    console.log('');
    console.log('    node local scan');
    console.log('');
    return;
}

const jsonPayload = {
    'key': 1,
    'another_key': "Some text"
};

// console.log(process.argv[2]);

lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: [__dirname, 'src/index.js'].join('/'),
    lambdaHandler: lambdaToRun,
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    timeoutMs: 1000*10,
    callback: function(err, data) {
        if (err) {
            console.error(err);
        } else {
            console.info(data);
        }
    }
});