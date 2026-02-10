// Given an array of bird sightings where every element represents a bird type id, determine the id
// of the most frequently sighted type. If more than 1 type has been spotted that maximum amount,
// return the smallest of their ids.
const birds = [2, 10, 10, 2];
// // Output: 4

//const birds = [1, 1, 2, 2, 3];
// Output: 1
function migratoryBirds(bird) {
  let count2 = {};
  for (let element of birds) {
    // console.log("counting", element, count2[element]);

    // count2[element] = (count2[element] || 0) + 1;
    // console.log("count", count2);
    //   if (count2[element] == undefined) {
    //     count2[element] = 1;
    //   } else {
    //     count2[element] += 1;
    //   }
    //   console.log("count", count2);
    // }
    count2[element] = count2[element] ? count2[element] + 1 : 1;
    // console.log("count", count2);
  }
  let frequency = 0;
  let id = Infinity;

  for (let key in count2) {
    if (
      count2[key] > frequency ||
      (count2[key] == frequency && Number(key) < id)
    ) {
      frequency = count2[key];
      id = key;
    }
  }
  console.log("Id", id, "frequency:", frequency);
}

migratoryBirds(birds);
