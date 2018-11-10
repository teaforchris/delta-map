const { Chromeless } = require('chromeless');

exports.scan = async function (event, context, callback) {

    const chromeless = new Chromeless({debug: true});

    return await chromeless
        // .goto('https://www.sainsburys.co.uk/shop/gb/groceries/cointreau-liqueur-50cl')
        .goto('http://httpstat.us/200')
        .evaluate(() => {
            // this will be executed in headless chrome
            return 'lol';
            const prices = [].map.call(
                document.querySelectorAll('div.pricing > p.pricePerUnit'),
                a => ({price: a.innerText})
            );
            return JSON.stringify(prices)
        })

        .end();

    console.log(price);
    callback(null, price);
    // run().catch(console.error.bind(console)).then(price => {callback(null, price)});
};