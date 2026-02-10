let a = [3, 2, 1];

function quicksort(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }

  console.log("tyeyeuoege", Arr[Arr.length - 1]);
  let pivot = Arr[Arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] < pivot) {
      left.push(Arr[i]);
    } else {
      right.push(Arr[i]);
    }
  }

  console.log("left", left);
  console.log("right", right);

  return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort(a));
