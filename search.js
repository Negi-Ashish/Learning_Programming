let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("We have found the target, is at the location:", i);
      return i;
    } else {
      console.log("We are still finding the target");
    }
  }

  return false;
}

//console.log(linearSearch(array, 10));

function hashSearch(arr, target) {
  let dictionary = {};

  for (let i = 0; i < arr.length; i++) {
    dictionary[arr[i]] = i;
  }
  console.log(dictionary);
  return dictionary[target] || false;
}

//console.log(hashSearch(array, 51));

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log("We have found the element");
      return mid;
    }
    if (arr[mid] > target) {
      console.log("It is on the left hand side");
      right = mid - 1;
    } else {
      console.log("It is on the right hand side");
      left = mid + 1;
    }
  }
  return false;
}
// console.log(binarySearch(array2, 10));

let array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recursive_binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    console.log("We are returning -1");
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    console.log("We have found the element", mid);
    return mid;
  }
  if (arr[mid] > target) {
    console.log("It is on the left hand side", mid);
    return recursive_binarySearch(arr, target, left, mid - 1);
  } else {
    console.log("It is on the right hand side", mid);
    recursive_binarySearch(arr, target, mid + 1, right);
  }
}
recursive_binarySearch(array22, -5);
