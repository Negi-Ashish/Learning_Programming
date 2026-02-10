function test(password) {
  const chars = "aaaaaaaaa"; // allowed letters for demo
  const length = password.length;

  // total number of combinations = chars.length ^ length
  const total = chars.length ** length;
  console.log("Total combinations to check:", total);

  for (let i = 0; i < total; i++) {
    let guess = "";
    let n = i;

    // build the string for this number
    for (let j = 0; j < length; j++) {
      guess = chars[n % chars.length] + guess;
      n = Math.floor(n / chars.length);
    }

    // log what we just generated
    console.log(`Step ${i + 1}: trying '${guess}'`);

    // check if it matches
    if (guess === password) {
      console.log("Found it!", guess);
      return "found";
    }
  }

  console.log("Checked everything, password not found");
  return "finished";
}

// Example run
test("ba");
