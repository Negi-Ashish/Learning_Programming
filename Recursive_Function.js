// function countdown(n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// }
// function countdown(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   countdown(n - 1);
// }
// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   console.log("Returning", n, n - 1);

//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function sum(n) {
//   if (n == 1) {
//     return 1;
//   }

//   return n + sum(n - 1);
// }
// console.log(sum(5));
// function reverse_string(str) {
//   let newstring = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstring = newstring + str[i];
//   }
// }
function reverse_string(str) {
  if (str === "") {
    return "";
  }
  return reverse_string(str.slice(1)) + str[0];
}
console.log(reverse_string("Hello"));
