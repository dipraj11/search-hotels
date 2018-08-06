var request = require('request');
var moment = require('moment');

function getHotels(req, callback) {
    request.get('https://api.myjson.com/bins/tl0bp', function (error, response, body) {

        console.log(req);


        var results = [];

        JSON.parse(body).hotels.forEach(function (hotel) {
            if (req.desCity) {
                if (hotel.city.indexOf(req.desCity) == -1) {
                    flag = false;
                    //console.log('Returing from desCity', hotel.city.indexOf(req.desCity))
                    return;
                }
            }
            if (req.hotelName) {
                if (hotel.name.indexOf(req.hotelName) == -1) {
                    flag = false;
                    //console.log('Returing from hotelName')
                    return;
                }
            }
            if (req.price.min) {
                if (hotel.price < req.price.min) {
                    flag = false;
                    //console.log('price.min')
                    return;
                }
            }
            if (req.price.max) {
                if (hotel.price > req.price.max) {
                    flag = false;
                    //console.log('price.max')
                    return;
                }
            }

            availFlag = false;
            if (req.bookingDate.from && req.bookingDate.to) {
                hotel.availability.forEach(function (availDate) {
                    availDateFrom = moment(availDate.from, "DD-MM-YYYY");
                    availDateTo = moment(availDate.to, "DD-MM-YYYY");
                    if (moment(req.bookingDate.from, "DD-MM-YYYY").isBetween(availDateFrom, availDateTo, null, '[]') && moment(req.bookingDate.to, "DD-MM-YYYY").isBetween(availDateFrom, availDateTo, null, '[]')) {
                        availFlag = true;
                        //console.log('fromDate', moment(req.bookingDate.from, "DD-MM-YYYY").isBetween(availDateFrom, availDateTo, null, '[]'))
                        //console.log('fromDate', moment(req.bookingDate.to, "DD-MM-YYYY").isBetween(availDateFrom, availDateTo, null, '[]'))
                    }
                });
            } else {
                availFlag = true;
            }

            if (availFlag) {
                //console.log('Im reaching while pushing results', hotel)
                results.push(hotel);

            }
        });
        if(results.length > 1){
            results.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            results.sort((a,b) => a.name.localeCompare(b.name));
        }
        callback(error, results);
    });
}

module.exports.getHotels = getHotels;