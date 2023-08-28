// Bài 1:
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
// Tạo hàm
function getError(field) {
  const findError = errors[field]; // Khai báo biến và gán lỗi tìm được vào biến đấy
  if (findError) {
    // Cho lặp qua từng phần tử
    for (let key in findError) {
      // Kiểm tra điều kiện, nếu lỗi thì trả về lỗi đấy
      // hasOwnProperty: output: true / false
      if (findError.hasOwnProperty(key)) {
        return findError[key];
      }
    }
  }
  // Không tìm thấy lỗi
  return "Not find Error";
}
console.log(getError("name"));
console.log(getError("email"));
console.log(getError("password"));
console.log(getError("Not"));

console.log("=============");

// Bài 2:
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Lê Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  { name: "Vũ Văn D", age: 10, address: "Hue" },
];

// create function Constructor
function Customer(name, age, address, shortName) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.shortName = shortName;
}

// Create function map around array
function createCustomer(persons) {
  return persons
    .map((person) => {
      const { name, age, address } = person; // Sử dụng destructuring
      const names = name.split(" "); // Chuyển chuỗi thành mảng
      const lastText = names[names.length - 1]; // Lấy ra chữ cuối cùng
      const shortName = `${name[0]} ${lastText}`; // Lấy ra short Name;
      return new Customer(name, age, address, shortName); // Lấy ra từ function constructor
    })
    .sort((a, b) => a.age - b.age); // sort sắp xếp tuổi theo thứ tự tăng dần
}
const result = createCustomer(customers);
console.log(result);

console.log("================");

// Bài 3
// Crete function Constructor
function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user"; // add role user for each Object
}
// Initialize data array
const data = [];
// crete register
function handleRegister(name, email, password) {
  // Check information
  if (!name || !email || !password) {
    console.log("Information Error");
    return;
  }
  // Create NewUser form Constructor
  const newUser = new User(name, password, email);
  data.push(newUser);
  // function handle output data
  return data;
}
// register two user
handleRegister("Nguyen Van A", "nguyenvana@gmail.com", "1234567");
handleRegister("Nguyen Van B", "nguyenvanb@gmail.com", "1234567");

// create function Login
function handleLogin(email, password) {
  for (let i = 0; i < data.length; i++) {
    // Check email và passworld
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }
  console.log("Invalid");
}

// Login with valid credentials
const dataLogin = handleLogin("nguyenvanb@gmail.com", "1234567");

// Output the data array and the logged-in User
console.log(data);
console.log(dataLogin);
