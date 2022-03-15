// add whatever parameters you deem necessary

function makeFreqCounter(array) {
  let frequencies = {};
  for (let el of array) {
    frequencies[el] = (frequencies[el] + 1) || 1;
  }
  return frequencies;
}

function constructNote(msg, letters) {
  if (!msg.length) return true;
  if (msg.length > letters.length) return false;
  let msgFreqObj = makeFreqCounter(msg);
  let letterFreqObj = makeFreqCounter(letters);
  if (msgFreqObj.size < letterFreqObj) return false;
  for (let char in msgFreqObj) {
    if (!(msgFreqObj[char] <= letterFreqObj[char])) return false;
  }
  return true;
}
