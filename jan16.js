let arr = [7, 2, 9, 4, 1];
let target = 4;
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}
//let realarr = quicksort(arr);
//console.log(realarr);
function binarysearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
function binarysearch2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("FINISHED");
      return arr[i];
    }
  }
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    console.log(Math.abs(lowest - target), Math.abs(arr[i] - target));

    if (Math.abs(lowest - target) > Math.abs(arr[i] - target)) {
      console.log(lowest, arr[i]);
      lowest = arr[i];
    }
  }
  return lowest;
}
//console.log(binarysearch(realarr, 4));

// Sort the array and find the number closest to the target.

// let arr2 = [4, 1, 8, 7];
// let target2 = 4;
// console.log(binarysearch2(quicksort(arr2), target2));
const users = [
  { name: "Aman", role: "admin" },
  { name: "Riya", role: "user" },
  { name: "Neha", role: "user" },
  { name: "Raj", role: "admin" },
];

function test(main) {
  let new5 = {};
  for (let i = 0; i < main.length; i++) {
    if (new5[main[i]["role"]] === undefined) {
      new5[main[i]["role"]] = 1;
    } else {
      new5[main[i]["role"]]++;
    }
  }
  console.log(new5);
}
//test(users);
const cart = [
  { item: "Pen", price: 10, qty: 2 },
  { item: "Book", price: 100, qty: 1 },
];

function total(cart) {
  let totalcost = 0;
  for (let ch of cart) {
    totalcost = totalcost + ch["price"] * ch["qty"];
  }
  console.log(totalcost);
}
total(cart);
