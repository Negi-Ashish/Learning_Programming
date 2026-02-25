let a = { Key1: 1, Key2: 2, Key3: 3 };
let b = { Key1: 3, Key2: 6, Key3: 3 };
let c = { Key1: 1, Key2: 2, Key3: 3, Key4: 4 };
let d = { Key11: 1, Key2: 2, Key3: 3 };
let e = { Key1: 1, Key2: 2, Key3: 3 };

function dictionaryIsEqual(d1, d2) {
  if (!Object.keys(d1).length === Object.keys(d2).length) {
    console.log("Keys are different");
    return false;
  }
  for (let key in d1) {
    if (d2[key] === undefined) {
      console.log("Key does not exist");
      return false;
    } else if (d2[key] !== d1[key]) {
      console.log("Values are different");
      return false;
    }
  }
  return true;
}
console.log(dictionaryIsEqual(a, e));
