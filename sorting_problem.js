let a = [1, 2, 3, 4, 5];
let b = [2, 4, 6, 7];
// Given two already sorted arrays,
//  merge them into one sorted array.
let ab = a.concat(b);

function sort_2_arrays(Arr) {
  console.log(Arr);
  if (Arr.length > 1) {
    const middle = Math.floor(Arr.length / 2);
    const left = Arr.slice(0, middle);
    const right = Arr.slice(middle);
    sort_2_arrays(left);
    sort_2_arrays(right);
    let i = 0,
      j = 0,
      k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
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
// sort_2_arrays(ab);

function selectionsort(list) {
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }
    console.log(list);
    let temp = list[minIndex];
    list[minIndex] = list[i];
    list[i] = temp;
    console.log(list);
  }
}
selectionsort(ab);
