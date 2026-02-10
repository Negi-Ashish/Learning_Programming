function triangle(amount) {
  let trianglelog = "";
  for (let i = 1; i <= amount; i++) {
    console.log(trianglelog + i);
    trianglelog = trianglelog + i;
  }
}
triangle(7);
