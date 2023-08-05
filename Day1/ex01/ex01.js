function swapNumber() {
  let a = parseInt(document.getElementById("aNumber").value);
  let b = parseInt(document.getElementById("bNumber").value);
  a = a + b; // Tính tổng của hai số lưu vào biến a
  b = a - b; // Lúc này a có giá trị mới tính ra giá trị mới của b lưu vào b
  a = a - b; // b có giá trị mới tính ra giá trị mới của a lưu vào a
  // Để thay đổi trên website
  document.getElementById("aNumber").value = a;
  document.getElementById("bNumber").value = b;
}
