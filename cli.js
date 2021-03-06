var argv = require('minimist')(process.argv.slice(2));
var modu = require('./index');
var util = require('./utils');

if (argv.version || argv.v) {
  console.log(util.version());
} else if (argv.help || argv.h) {
  console.log(util.usage());
} else if (argv.hello) {
  console.log(modu.hello());
} else {
  console.log('Command not found. Try any of the following:');
  console.log(util.usage());
}
