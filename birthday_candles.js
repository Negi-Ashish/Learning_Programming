// You are in charge of the cake for a child's birthday.
//  It will have one candle for each year of their total age. They will only be able to
// blow out the tallest of the candles.
//  Your task is to count how many candles are the tallest.

let candles = [4, 4, 1, 3, 9];
// The tallest candles are 4 units high.
//  There are 2 candles with this height,
//   so the function should return 2.
function birthdayCakeCandles() {
  let count2 = { candles };
  for (let element of candles) {
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
  console.log(frequency);
}
// birthdayCakeCandles(candles);
function birthdaycakecandles2(candles) {
  let max = Math.max(...candles);
  let frequency2 = 0;
  for (let element of candles) {
    if (max == element) {
      frequency2 = frequency2 + 1;
    }
  }
  console.log(frequency2);
}
birthdaycakecandles2(candles);
