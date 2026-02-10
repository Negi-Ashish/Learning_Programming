let a = 5;
let b = [1, 2, 4];
// [3, 5]

function check(a, b) {
  const newsetb = new Set(b);

  const stuffnotthere = [];
  for (let i = 1; i <= a; i++) {
    if (!newsetb.has(i)) {
      console.log(i);
    }
  }
}

check(a, b);
