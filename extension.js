'use strict';

var qr = require('qr-image');
var express = require('express');

var app = express();

module.exports = function (nodecg) {
    var encodeState = function(stateString, data) {
        var s = "{StateString:" + stateString + ",";
        s += "Player1Name:" + data.player1.name + ",";
        s += "Player1Character:" + data.player1.character + ",";
        s += "Player2Name:" + data.player2.name + ",";
        s += "Player2Character:" + data.player2.character + "}";

        return s;
    }

    var imageData = null;

    nodecg.listenFor("startMarker", function(data, cb)
    {
        imageData = qr.image(encodeState("start", data));
        cb(null);
    });

    nodecg.listenFor("endMarker", function(data, cb)
    {
        imageData = qr.image(encodeState("end", data));
        cb(null);
    });

    app.get('/clapboard', function(req, res) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.write(imageData.read());
        res.end();
    });

    nodecg.mount(app);
};

