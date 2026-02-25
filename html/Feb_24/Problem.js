function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let space = "";
    for (let j = 1; j <= n - i; j++) {
      space = space + " ";
    }
    let hashes = "";
    for (let k = 1; k <= i; k++) {
      hashes = hashes + "#";
    }
    console.log(space + hashes);
  }
}

// function timeConversion(s) {
//   let AM = false;
//   let PM = false;
//   let hour = s.slice(0, 2);

//   console.log(hour);
//   if (s[s.length - 2] === "A") {
//     AM = true;
//   } else {
//     PM = true;
//   }
//   if (PM === true) {
//     if (hour === 12) {
//       console.log("ITS PM AND IT IS 12 HOUR");

//       return s.slice(0, s.length - 2);
//     } else {
//       console.log("ITS PM AND ITS NOT 12 HOUR");
//       hour = hour + 12;
//       let returning = hour + s.slice(3, s.length - 2);
//       return returning;
//     }
//   }
// }

function timeConversion(s) {
  let period = s.slice(-2);
  let time = s.slice(0, -2);
  let parts = time.split(":");
  let hour = parseInt(parts[0]);

  console.log(period);
  console.log(time);
  console.log(parts);
  console.log(hour);

  if (period === "AM") {
    console.log("This is AM");
    if (hour == 12) {
      parts[0] = "00";
    }
  } else {
    console.log("This is PM");
    if (hour != 12) {
      parts[0] = hour + 12;
    }
  }
  return parts.join(":");
}
console.log(timeConversion("07:05:45PM"));
