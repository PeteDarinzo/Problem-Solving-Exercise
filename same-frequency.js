// add whatever parameters you deem necessary

function makeFreqCounter(array) {
  let frequencies = {};
  for (let el of array) {
    frequencies[el] = (frequencies[el] + 1) || 1;
  }
  return frequencies;
}


function sameFrequency(num1, num2) {
  let num1Freq = makeFreqCounter((num1.toString()).split(""));
  let num2Freq = makeFreqCounter((num2.toString()).split(""));
  for (let digit in num1Freq) {
    if (!(num1Freq[digit] === num2Freq[digit])) return false;
  }
  return true;
}
