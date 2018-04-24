var shared = require('./shared.js');
var video = require('./video/video');

module.exports = function(params){

    console.log(params);

    return GoogleTTS(params.text, "fr-FR", 1)
	  .then(function(path){
        console.log(path);
        
        var p = {
            uri:path
        };

        video.load(p);
	  });
};

