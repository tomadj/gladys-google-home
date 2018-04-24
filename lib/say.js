var shared = require('./shared.js');
var video = require('./video/video');
var GoogleTTS = require('google-tts-api');

module.exports = function(params){

    console.log(params);

    return GoogleTTS(params.text, "fr-FR", 1)
	  .then(function(path){
        console.log(path);
        
        var p = {
            uri:path,
            contentType: 'audio/mp3',
            streamType: 'BUFFERED'
        };

        video.load(p);
	  });
};

