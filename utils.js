var fs = require('fs');

/**
 * Get usage instructions
 * @return {String} the instructions to run this thing
 */
module.exports.usage = function () {
  var u = [];
  u.push('A minimalist template to build npm modules');
  u.push('usage: node cli.js [options]');
  u.push('');
  u.push(' --hello prints a message');
  u.push(' --help prints this message');
  u.push(' --version prints module version');
  u.push('');
  return u.join('\n');
};

/**
 * Get module version from the package.json file
 * @return {String} version number
 */
module.exports.version = function () {
  var data = fs.readFileSync(__dirname + '/package.json');
  return JSON.parse(data).version;
};
