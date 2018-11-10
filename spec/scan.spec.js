const request = require('request');
const delta_sut = require('../src/index');

describe('Scanning a URL', function() {

    beforeEach(function () {

    });

    it('should get a status code.', function() {

        const requestFunc = spyOn(request).and.callfake(function(){
            return Promise.resolve({
                error: null,
                response: 200,
                body: ''
            })
        });

        _delta_.scan();
        expect(_delta_.fetch).toHaveBeenCalled();

    });

});