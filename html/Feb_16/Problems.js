let items = ["cat", "dog", "elephant", "bat", "lion"];

function group() {
  let new2 = {};
  for (let i = 0; i < items.length; i++) {
    if (new2[items[i].length] === undefined) {
      new2[items[i].length] = [items[i]];
      console.log(items[i]);
    } else {
      new2[items[i].length].push(items[i]);
    }
  }
  return new2;
}

const data = [
  ["Ashish", "Math", 90],
  ["Ashish", "Science", 85],
  ["Rahul", "Math", 78],
  ["Priya", "Science", 92],
];

// {
//   Ashish: { Math: 90, Science: 85 },
//   Rahul: { Math: 78 },
//   Priya: { Science: 92 }
// }

function sort(list) {
  let new5 = {};
  for (let i = 0; i < list.length; i++) {
    new5[list[i][0]] = [list[i][1], list[i][2]];
  }
  console.log(new5);
}

// sort(data);

let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function solve(array, find) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === find) {
      return mid;
    }
    if (find > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(solve(array2, 12));
