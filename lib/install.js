const Promise = require('bluebird');

module.exports = function install() {

  return new Promise(function (resolve, reject) {
    // async work here

    var type = {
      name: 'Speak (Google Voice)',
      service: 'speak'
    };
  
    const promise = gladys.notification.install(type);


    resolve(promise);

    // if something fails, reject(new Error('bad bad'));
  })

};