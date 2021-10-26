const isVerified = (params) => {

  if (typeof params.shift !== 'number' || params.shift % 1) {
    console.log('no correct key');
    return false;
  }

  if (params.action !== 'encode' && params.action !== 'code') {
    console.log('no correct action');
    return false;
  }

  return true;
}

module.exports = isVerified;
