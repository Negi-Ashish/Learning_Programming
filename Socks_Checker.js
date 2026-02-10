///There is a large pile of socks that must be paired
// by color. Given an array of integers representing the
//  color of each sock, determine how many pairs of socks
//  with matching colors there are. Example

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// Output: 2

//Color 1 → 3 socks → 1 pair

//Color 2 → 3 socks → 1 pair

//Color 3 → 1 sock → 0 pairs

function checker(socks) {
  socks_dictionary = {};
  for (let element of socks) {
    socks_dictionary[element] = socks_dictionary[element]
      ? socks_dictionary[element] + 1
      : 1;
  }
  let total = 0;
  for (let key in socks_dictionary) {
    total = total + Math.floor(socks_dictionary[key] / 2);
  }
  console.log(total);
}

checker(socks);
