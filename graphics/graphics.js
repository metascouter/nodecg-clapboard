'use strict';

window.onload = function() {
    var canvas = document.getElementById('qrcode');
    var applyData = function(data, cb)
    {
        var ctx = canvas.getContext('2d');    
        var img = new Image;
        img.onload = function()
        {
            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(img, 0, 0);
        };

        //
        // Force cache miss
        //
        img.src = "http://localhost:9090/clapboard?" + new Date().getTime();
    };

    nodecg.listenFor('startMarker', applyData);
    nodecg.listenFor('endMarker', applyData);
};
