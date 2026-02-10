function checkAge(age) {
  let return_variable = "";
  if (age >= 10) {
    return_variable = "Adult";
  } else {
    return_variable = "Minor";
  }
  return return_variable;
}
///console.log(checkAge(20));
function odd_or_even(n) {
  let answer = "";
  if (n % 2 > 0) {
    answer = "Odd";
  } else {
    answer = "Even";
  }
  return answer;
}

///console.log(odd_or_even(4));

let marks = [80, 75, 90];

function marks_calc(student_marks) {
  let added_marks = 0;
  for (let i = 0; i < student_marks.length; i++) {
    added_marks = added_marks + student_marks[i];
  }
  return added_marks;
}

let pocketMoney = 500;
let expenses = [100, 100, 100, 100, 100];
function savedmoney(pocketMoney, expenses) {
  let how_much_spent = 0;
  for (let i = 0; i < expenses.length; i++) {
    how_much_spent = how_much_spent + expenses[i];
  }
  if (pocketMoney - how_much_spent > 0) {
    return `Saved money, balance: ${pocketMoney - how_much_spent}`;
  }
  if (pocketMoney - how_much_spent == 0) {
    return `Exact spent, balance: ${pocketMoney - how_much_spent}`;
  }
  if (pocketMoney - how_much_spent < 0) {
    return `Over spent, balance: ${pocketMoney - how_much_spent}`;
  }
}

///console.log(savedmoney(pocketMoney, expenses));

let num_array = [1, -1, 2, 3, 4, 5, -7, -10, 10, 27, 22, -21, -24];

function negative_positive_checker(array) {
  let positive_arrays = [];
  let negative_arrays = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive_arrays.push(array[i]);
    } else {
      negative_arrays.push(array[i]);
    }
  }
  console.log(positive_arrays);
  console.log(negative_arrays);
}

///negative_positive_checker(num_array);

function ternary_checker(array) {
  let positive_arrays = [];
  let negative_arrays = [];
  for (let i = 0; i < array.length; i++) {
    array[i] >= 0
      ? positive_arrays.push(array[i])
      : negative_arrays.push(array[i]);
  }
  console.log(positive_arrays);
  console.log(negative_arrays);
}
///ternary_checker(num_array);

function negative_positive_checker_whileloop(array) {
  let positive_arrays = [];
  let negative_arrays = [];
  let i = 0;
  while (array.length > i) {
    if (array[i] >= 0) {
      positive_arrays.push(array[i]);
    } else {
      negative_arrays.push(array[i]);
    }
    i = i + 1;
  }
  console.log(positive_arrays);
  console.log(negative_arrays);
}
///negative_positive_checker_whileloop(num_array);
