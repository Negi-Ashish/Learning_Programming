function right_angle_triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let space = 1; space <= n - i; space++) {
      row += " ";
    }
    for (let star = 1; star <= i; star++) {
      row += "*";
    }
    console.log(row);
  }
}

// right_angle_triangle(10);

function understanding_time_complexity(n, m) {
  for (let i = 0; i < n; i++) {
    // console.log("outer iteration number", i);
    for (let star = 0; star < m; star++) {
      console.log("inner iteration number", star);
    }
  }
}
understanding_time_complexity(5, 5);
