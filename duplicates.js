// let d = [6, 6, 2, 2, 3, 3, 4];
// function array1(array2) {
//   const uniqueSet = new Set();
//   for (i = 0; i < array2.length; i++) {
//     uniqueSet.add(array2[i]);
//   }
//   console.log(uniqueSet);
// }

// array1(d);
let a = [1, 2, 3];
let b = [2, 3, 4];
//set1.has(arr2[i])
function common(a, b) {
  let common_things = [];
  for (let i2 = 0; i2 < a.length; i2++) {
    for (let i = 0; i < b.length; i++) {
      if (b[i] == a[i2]) {
        common_things.push(a[i2]);
      }
    }
  }
  console.log(common_things);
}

function finding_commons_using_set(a, b) {
  const common = new Set();

  const newseta = new Set(a);

  for (let i = 0; i < b.length; i++) {
    if (newseta.has(b[i])) {
      common.add(b[i]);
    }
  }
  console.log(common);
}

finding_commons_using_set(a, b);
