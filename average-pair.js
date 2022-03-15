// add whatever parameters you deem necessary

function getAverage(a, b) {
  return ((a + b) / 2);
}

function averagePair(values, goal) {
  let left = 0;
  let right = values.length - 1;
  let leftVal;
  let rightVal;
  let average;
  while (left < right) {
    leftVal = values[left];
    rightVal = values[right];
    average = getAverage(leftVal, rightVal);
    if (average === goal) {
      return true;
    } else if (average < goal) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
