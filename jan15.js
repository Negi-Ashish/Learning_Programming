let str = [19, 17, 15, 12, 16, 18, 4, 11, 13];
// function quicksort(str) {
//   let pivot = str.length - 1;
//   let left = [];
//   let right = [];

//   if (left === right) {
//     return -1;
//   }

//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] > pivot) {
//       right.push[str[i]];
//     } else {
//       left.push[str[i]];
//     }
//   }
//   return [quicksort(left), pivot, quicksort(right)];
// }
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort(str));
