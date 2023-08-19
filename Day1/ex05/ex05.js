function sortNumbers() {
  // Tạo biến
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = parseInt(document.getElementById("c").value);
  let d = document.getElementById("result");
  // Tạo điều kiên
  if (a <= b && a <= c) {
    if (b <= c) {
      d.innerHTML = a + ", " + b + ", " + c;
    } else {
      d.innerHTML = a + ", " + c + ", " + b;
    }
  } else if (b <= c && b <= a) {
    if (c <= a) {
      d.innerHTML = b + ", " + c + ", " + a;
    } else {
      d.innerHTML = b + ", " + a + ", " + c;
    }
  } else if (c <= b && c <= a) {
    if (b <= a) {
      d.innerHTML = c + ", " + b + ", " + a;
    } else {
      d.innerHTML = c + ", " + a + ", " + b;
    }
  } else {
    d.innerHTML = "Not Find Number";
  }
}
