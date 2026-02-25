let test = [1, 2, 3, 50, 52, 62, 732];

function merge(arr) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    merge(left);

    merge(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        k++;
        i++;
      } else {
        arr[k] = right[j];
        j++;
        k++;
      }
    }

    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  console.log(arr);
}
merge(test);
