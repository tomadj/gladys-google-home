const Promise = require('bluebird');

module.exports = function install() {

  return new Promise(function (resolve, reject) {
    // async work here

    // var type = {
    //   name: 'Speak (Google Voice)',
    //   service: 'speak'
    // };
  
    // const promise = gladys.notification.install(type);
    
    // resolve(promise);

    const valueToReturn = console.log('This will appear just one time...');

    resolve(valueToReturn);

    // if something fails, reject(new Error('bad bad'));
  })

};