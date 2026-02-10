// 🧠 Problem Recap

// n = number of prisoners

// m = number of candies

// s = starting chair number

// Candies are distributed one by one, moving forward in a circular manner.

// Find which chair gets the last candy (that prisoner gets warned).

// 1	2
// 2	3
// 3	4
// 4	1
// 5	2
// 6	3 ← last candy

function prison(n, m, s) {
  let result = (s + m - 1) % n;
  return result === 0 ? n : result;
}
function save_the_prisoner(n, m, s) {
  let currentchair = s;
  for (let candies = 1; candies < m; candies++) {
    currentchair = currentchair + 1;
    if (currentchair > n) {
      currentchair = 1;
    }
  }
  return currentchair;
}
// prison(4, 9, 1);

x = save_the_prisoner(4, 15, 1);
console.log(x);
