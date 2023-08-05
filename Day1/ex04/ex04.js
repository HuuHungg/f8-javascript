function checkSamSign() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  if (a * b > 0) {
    document.getElementById("result").innerHTML = "They are Same Sign";
  } else if (a * b < 0) {
    document.getElementById("result").innerHTML = "They are Opposite sign ";
  } else {
    document.getElementById("result").innerHTML = "Error ";
  }
	console.log("Yushing interface")

}
