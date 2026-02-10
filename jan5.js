function removespaces() {
  let text = "he l l o";
  let newtext = "";
  for (let i = 0; i < text.length; i++) {
    if (!(text[i] === " ")) {
      newtext = newtext + text[i];
    }
  }
  console.log(newtext);
}
function palindrom() {
  let text = "121";

  for (let i = 0; i < text.length; i++) {
    if (!(text[i] === text[text.length - i - 1])) {
      return "NO ITS NOT A PALINDROM";
    }
  }
  return "IT IS A PALINDROM";
}

function count_character() {
  let main = "hello";
  let amount = {};
  for (let i = 0; i < main.length; i++) {
    if (amount[main[i]]) {
      amount[main[i]] = amount[main[i]] + 1;
    } else {
      amount[main[i]] = 1;
    }
  }
  console.log(amount);
}
function count_character2() {
  let main = "hello";
  let amount = {};
  for (let i = 0; i < main.length; i++) {
    amount[main[i]] = amount[main[i]] ? amount[main[i]] + 1 : 1;
  }
  console.log(amount);
}
//   if (amount["hello"]) {
//     console.log("It exists");
//     amount["hello"] += 1;
//     console.log(amount["hello"]);
//   } else {
//     console.log("It does not exist");
//   }
//   if (amount["goodnight"]) {
//     console.log("goodnight exists");
//   } else {
//     console.log("goodnight does not exist");
//   }
function removeduplicates() {
  let string = "hheelloo";
  let newstring = "";
  for (let i = 0; i < string.length; i++) {
    if (!newstring.includes(string[i])) {
      newstring = newstring + string[i];
    }
  }
  console.log(newstring);
}

function longest_word() {
  let sentence = "hi my name is ronav mathur";
  let list = sentence.split(" ");
  let highest = "";
  for (let element of list) {
    if (element.length > highest.length) {
      highest = element;
    }
  }
  console.log(highest);
}

function cap_first_character() {
  let sentence = "hi my name is ronav mathur";
  let list = sentence.split(" ");
  let list2 = [];
  for (let element of list) {
    list2.push(element[0].toUpperCase() + element.slice(1));
  }
  list2 = list2.join(" ");
  console.log(list2);
}
cap_first_character();
