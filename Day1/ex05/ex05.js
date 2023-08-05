function sortNumbers() {
  // Tạo biến
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = parseInt(document.getElementById("c").value);

  // Tạo điều kiên
  if (a <= b && a <= c) {
    if (b <= c) {
      document.getElementById("result").innerHTML = a + ", " + b + ", " + c;
    } else {
      document.getElementById("result").innerHTML = a + ", " + c + ", " + b;
    }
  } else if (b <= c && b <= a) {
    if (c <= a) {
      document.getElementById("result").innerHTML = b + ", " + c + ", " + a;
    } else {
      document.getElementById("result").innerHTML = b + ", " + a + ", " + c;
    }
  } else if (c <= b && c <= a) {
    if (b <= a) {
      document.getElementById("result").innerHTML = c + ", " + b + ", " + a;
    } else {
      document.getElementById("result").innerHTML = c + ", " + a + ", " + b;
    }
  } else {
    document.getElementById("result").innerHTML = "Not Find Number";
  }
}
