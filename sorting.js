function bubblesort(list) {
  let n = list.length;
  for (let i = 0; i < n; i++) {
    console.log(list);

    for (let i2 = 0; i2 < n - 1; i2++) {
      if (list[i2] > list[i2 + 1]) {
        let temp = list[i2];
        list[i2] = list[i2 + 1];
        list[i2 + 1] = temp;
      }
    }
  }
  return list;
}

// console.log(bubblesort(a));

function selectionsort(list) {
  let n = list.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }
    console.log(list);

    let temp = list[minIndex];
    list[minIndex] = list[i];
    list[i] = temp;
    console.log("The minimum element is at position:", minIndex);
    console.log(list);
  }
}
// selectionsort(a);

// def MergeSort(Arr):
//     if len(Arr)>1:
//         Middle=len(Arr)//2
//         Left=Arr[0:Middle]
//         Right=Arr[Middle:]
//         MergeSort(Left)
//         MergeSort(Right)
//         i=j=k=0
//         while(i<len(Left) and j<len(Right)):
//             if Left[i]<Right[j]:
//                 Arr[k]=Left[i]
//                 i+=1
//             else:
//                 Arr[k]=Right[j]
//                 j+=1
//             k+=1

//         while(i<len(Left)):
//             Arr[k]=Left[i]
//             i+=1
//             k+=1
//         while(j<len(Right)):
//             Arr[k]=Right[j]
//             j+=1
//             k+=1

function mergesort(Arr) {
  if (Arr.length > 1) {
    const middle = Math.floor(Arr.length / 2);
    const left = Arr.slice(0, middle);
    const right = Arr.slice(middle);

    mergesort(left);
    mergesort(right);

    let i = 0,
      j = 0,
      k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        Arr[k] = left[i];
        i += 1;
      } else {
        Arr[k] = right[j];
        j += 1;
      }
      k += 1;
    }
    while (i < left.length) {
      Arr[k] = left[i];
      i += 1;
      k += 1;
    }
    while (j < right.length) {
      Arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }

  console.log(Arr);
}
let a = [19, 17, 15, 12, 16, 18, 4, 11, 13];
function quicksort(Arr) {
  if (Arr.length == 1) {
    console.log("encountered ending condition for", Arr);
    return Arr;
  }
  let pivot = Arr[Arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] < pivot) {
      left.push(Arr[i]);
    } else {
      right.push(Arr[i]);
    }
  }
  console.log("left", left);
  console.log("right", right);

  return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort(a));

// Return:
// [quicksort (left [ 12, 4, 11 ]) + 13 +  quicksort (right [ 19, 17, 15, 16, 18 ])]

// // When left is getting sorted
// [quicksort ([4]) + 11 + quicksort ([12])] + 13 +  quicksort (right [ 19, 17, 15, 16, 18 ])]

// [4 , 11 , 12] + 13 +  quicksort (right [ 19, 17, 15, 16, 18 ])]

// [4 , 11 , 12 , 13 +  quicksort (right [ 19, 17, 15, 16, 18 ])]

// // When right is getting sorted
// [quicksort ([ 17, 15, 16 ]) + 18 + quicksort ([19])]

// [15,16,17,18,19]

// // Total answer
// [4 , 11 , 12 , 13, 15,16,17,18,19]
