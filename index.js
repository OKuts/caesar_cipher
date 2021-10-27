const argv = require('minimist')(process.argv.slice(2));
const getParams = require('./modules/getParams');
const isVerivied = require('./modules/isVerified');
const transform = require('./modules/transform');

const init = (args) => {

  const params = getParams(args);
  if (!params) return;

  if (!isVerivied(params)) return;

  transform(params);

}

init(argv);
