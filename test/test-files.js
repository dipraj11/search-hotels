var expect = require('chai').expect;
var request = require('request');

describe('API Testing for status ans response', function () {
    it('search only for hotel name', function (done) {
        this.timeout(3000);
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: 'Golden Tulip',
                desCity: '',
                price: {
                    min: '',
                    max: ''
                },
                bookingDate: {
                    from: '',
                    to: ''
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
    it('search only for city name', function (done) {
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: '',
                desCity: 'dubai',
                price: {
                    min: '',
                    max: ''
                },
                bookingDate: {
                    from: '',
                    to: ''
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
    it('search only for price', function (done) {
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: '',
                desCity: '',
                price: {
                    min: 102,
                    max: 200
                },
                bookingDate: {
                    from: '',
                    to: ''
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
    it('search only for date', function (done) {
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: '',
                desCity: '',
                price: {
                    min: '',
                    max: ''
                },
                bookingDate: {
                    from: '10-10-2020',
                    to: '19-10-2020'
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
    it('Without any filter', function (done) {
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: '',
                desCity: '',
                price: {
                    min: '',
                    max: ''
                },
                bookingDate: {
                    from: '',
                    to: ''
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
    it('With all filter', function (done) {
        var options = {
            method: 'POST',
            url: 'https://tajawal-challenge-hotel.herokuapp.com/getHotels',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                hotelName: 'Concorde Hotel',
                desCity: 'Manila',
                price: {
                    min: 50,
                    max: 100
                },
                bookingDate: {
                    from: '10-10-2020',
                    to: '19-10-2020'
                }
            },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.a('object');
            expect(body.data).to.be.a('array');
            done();
        });
    });
});