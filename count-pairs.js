// add whatever parameters you deem necessary

// // BAD SOLUTION O(n^2)
// function countPairs(values, goal) {
//   let sumCount = 0;
//   for (let i = 0; i < values.length - 1; i++) {
//     for (let j = i + 1; j < values.length; j++) {
//       if (values[i] + values[j] === goal) sumCount++;
//     }
//   }
//   return sumCount;
// }

//SPRINGBOARD O(n) solution

function countPairs(values, goal) {
  let s = new Set(values);
  let count = 0;
  for (let val of values) {
    s.delete(val);
    if (s.has(goal - val)) {
      count++;
    }
  }
  return count;
}