// Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter
// Yêu cầu chi tiết:
// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi

function totalSum(...args) {
  if (!args.every((arg) => !isNaN(parseFloat(arg)) && isFinite(arg))) {
    return "Invalid Number";
  }
  return args.reduce((acc, val) => acc + parseFloat(val), 0);
}

console.log(totalSum(10, 20, "30"));
console.log(totalSum(10, "Hi"));
