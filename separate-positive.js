// add whatever parameters you deem necessary
function separatePositive(values) {
  let left = 0;
  let right = values.length - 1;
  let leftVal;
  let rightVal;
  while (left < right) {
    leftVal = values[left];
    rightVal = values[right];
    if (leftVal < 0 && rightVal > 0) { // if a negative is encountered
      // then swap
      let temp = leftVal;
      values[left] = rightVal;
      values[right] = temp;
      left++; // go to next value
    } else if (leftVal < 0 && rightVal < 0) {
      right--;
    } else {
      left++;
    }
  }
  return values;
}
