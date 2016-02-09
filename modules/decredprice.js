"use strict";

var request = require('request');

exports.module = function() {

    var price_providers = {
        bleutrade: function(callback) {
            request('https://bleutrade.com/api/v2/public/getticker?market=DCR_BTC', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var s = JSON.parse(body);
                    var price = s.result[0].Last;
                    callback(price);
                }
                else {
                    callback("ERR");
                }
            });
        },
        bittrex: function(callback) {
            request('https://bittrex.com/api/v1.1/public/getticker?market=BTC-DCR', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var s = JSON.parse(body);
                    var price = s.result.Last;
                    callback(price);
                }
                else {
                    callback("ERR");
                }
            });
        },
        'c-cex': function(callback) {
            request('https://c-cex.com/t/api_pub.html?a=getmarketsummaries', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var s = JSON.parse(body);
                    var price = s.result.Last;
                    var r = "ERR";
                    var markets = s.result;
                    for(var i = 0; i < markets.length; i++) {
                        var m = markets[i];
                        if(m.MarketName === "DCR-BTC")
                            r = m.Last;
                    }
                    callback(r);
                }
                else {
                    callback("ERR");
                }
            });

        }
    };
    this.onCommand_price = function(nick, command) {
        var self = this;

        var result = [];
        var left = 0;
        for(var provv in price_providers) left++;

        for(var prov in price_providers) {
            (function(z){
                price_providers[prov](function(price){
                    result.push([z, parseFloat(price).toFixed(8)]);
                    left--;
                    if(left === 0) {
                        result.sort();
                        var r = '';
                        for(var i = 0; i < result.length; i++) {
                            if(r !== '') r += ', ';
                            r += result[i][0] + ': ' + result[i][1];
                        }
                        self.channel.say(r);
                    }
                });
            })(prov);
        }
    };
};
