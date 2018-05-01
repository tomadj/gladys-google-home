var shared = require('./shared.js');
var video = require('./video/video');
var GoogleTTS = require('google-tts-api');

module.exports = function (params) {

    console.log(params);

    var lang = getLanguage(params.language);

    return GoogleTTS(params.text, lang, 1)
        .then(function (path) {
            console.log(path);

            var p = {
                uri: path,
                isTTS: true
            };

            video.load(p);
        });
};

function getLanguage(code) {
    var result = '';
    switch (code) {
        case 'fr':
            result = 'fr-FR';
            break;

        default:
            result = 'fr-FR';
            break;
    }

    return result;
}