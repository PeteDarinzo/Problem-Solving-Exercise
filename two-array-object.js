// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  let outputObj = {};
  if (keys.length > values.length) {
    for (let i = 0; i < keys.length; i++) {
      outputObj[(keys[i])] = values[i] || null;
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      outputObj[(keys[i])] = values[i];
    }
  }
  return outputObj;
}
