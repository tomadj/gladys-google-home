// This the entry point of the module.
// You could declare all your function there, but by convention and for good practices
// you should only store functions in the './lib' folder and expose them here

const install = require('./lib/install');
const init = require('./lib/init');
const video = require('./lib/video/video');


module.exports = function(sails) {

  return {
    install : install,
    init:init,
    video,
    music: video
  }
};