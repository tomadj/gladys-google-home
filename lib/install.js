var shared = require('./shared.js');

module.exports = function () {

  var type = {
    name: 'Google Home',
    service: 'googlehome'
  };

  return gladys.notification.install(type);
};