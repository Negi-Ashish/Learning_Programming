let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [3, 2, 1, -1, -2, -3];
let c = [];
function mergesort(Arr) {
  if (Arr.length > 1) {
    const middle = Math.floor(Arr.length / 2);
    const left = Arr.slice(0, middle);
    const right = Arr.slice(middle);

    mergesort(left);
    mergesort(right);

    let i = 0,
      j = 0,
      k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        Arr[k] = left[i];
        i += 1;
      } else {
        Arr[k] = right[j];
        j += 1;
      }
      k += 1;
    }
    while (i < left.length) {
      Arr[k] = left[i];
      i += 1;
      k += 1;
    }
    while (j < right.length) {
      Arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }

  console.log(Arr);
}
function reversed(Arr) {
  let length = Arr.length;
  for (let i = length - 1; i >= 0; i--) {
    c.push(b[i]);
  }
  return c;
}
console.log(reversed(b));
