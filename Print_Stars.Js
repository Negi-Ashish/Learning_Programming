/// ***
/// ***
/// ***

function stars(n) {
  let starsvalue = "*";

  for (let i = 1; i < n; i++) {
    starsvalue = starsvalue + "*";
  }
  for (let i = 0; i < n; i++) {
    console.log(starsvalue);
  }
}
stars(5);
