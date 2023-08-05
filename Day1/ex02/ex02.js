function calculate() {
  let a = parseInt(document.getElementById("aValue").value);
  let b = parseInt(document.getElementById("bValue").value);
  let c = parseInt(document.getElementById("cValue").value);
  let d = parseInt(document.getElementById("dValue").value);
  let expression = a + b + Math.pow(c, d) / 2;
  document.getElementById("result").innerHTML = expression;
}
