let hello = [10, 20, 30, 40, 50, 60, 90, 100, 35];

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i);
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

console.log(quick_sort(hello));
