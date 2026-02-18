let a = [23, 18, 17, 16, 30, 35, 50, 1, -10];

function sort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    sort(left);
    sort(right);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        array[k] = left[i];

        i = i + 1;
        k = k + 1;
      } else {
        array[k] = right[j];
        j = j + 1;
        k = k + 1;
      }
    }
    while (i < left.length) {
      array[k] = left[i];
      i = i + 1;
      k = k + 1;
    }

    while (j < right.length) {
      array[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  }
  console.log(a);
}

sort(a);
