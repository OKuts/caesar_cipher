const getParams = (args) => {
  const inputParams = ['action', 'shift', 'input', 'output'];
  const params = {};
  try {
    inputParams.forEach(el => params[el] = args[el] || args[el][0]);
  } catch (e) {
    console.log('не указаны обязательные параметры')
    return null;
  }
  return params
}

module.exports = getParams;

