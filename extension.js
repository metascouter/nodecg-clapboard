'use strict';

var qr = require('qr-image');
var express = require('express');

var app = express();

module.exports = function (nodecg) {
    var encodeState = function(stateString, data) {
        var s = "State:" + stateString + ",";
        s += "P1:" + data.player1.name + ",";
        s += "P1Char:" + data.player1.character + ",";
        s += "P2:" + data.player2.name + ",";
        s += "P2Char:" + data.player2.character;

        return s;
    }

    var encodedString = "Uninitialized";

    nodecg.listenFor("startMarker", function(data, cb)
    {
        encodedString = encodeState("start", data);
        cb(null);
    });

    nodecg.listenFor("endMarker", function(data, cb)
    {
        encodedString = encodeState("end", data);
        cb(null);
    });

    app.get('/clapboard', function(req, res) {
        if (encodedString)
        {
            res.writeHead(200, 
            { 
                'Content-Type': 'image/png',
                'Cache-control': 'no-cache, must-revalidate',
            });

            //
            // TODO: Do this asynchronously
            //
            res.write(qr.imageSync(encodedString));
            res.end();
        }
    });
	
    app.post('/clapboard', function(req, res) {
		//
		// TODO
		//
		console.log(req.body);
		res.end();
    });

    nodecg.mount(app);
};

