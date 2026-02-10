let a = [1, 2, 2, 4, 5, 6, 7, 8, 9, 11, 11, 12];
let n = 11;

function position(a, n) {
 
  for (let i = 0; i <= a.length; i++) {
    if (n == a[i]) {
      console.log("the position is", i + 1);
      break;
    }
  }
}

position(a, n);
