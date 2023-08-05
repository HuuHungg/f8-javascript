function findLargestNumber() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = parseInt(document.getElementById("c").value);

  // Viết điều kiện
  let largestNumber;
  if (a > b && a > c) {
    largestNumber = a;
  } else if (b > c && b > a) {
    largestNumber = b;
  } else {
    largestNumber = c;
  }

  // C2
  //   let largestNumber = Math.max(a, b, c);
  document.getElementById("maxNumber").innerHTML = largestNumber;
}
