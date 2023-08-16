// Bài 1
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

// Cách 1
let arr = [5, 7, 1, 3, 8, 9, 6, 2];
// Tìm số lớn nhất số nhỏ nhất
const max = Math.max(...arr);
const min = Math.min(...arr);

// Vị trí của số lớn nhất và nhỏ nhất tìm vị trí đầu tiền trong mảng
const maxIndex = arr.indexOf(max);
const minIndex = arr.indexOf(min);

console.log(`Số lớn nhất ${max} ở vị trí ${maxIndex}`);
console.log(`Số nhỏ nhất ${min} ở vị trí ${minIndex}`);

// Sử dụng vòng lặp

// Cách 2
let maxNumber = arr[0]; // In ra là 5
let maxFindNumber = 0; // Gán vị trí index = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    // Nếu arr[i] lớn hơn maxNumber thì gán lại maxNumber
    maxNumber = arr[i];
    maxFindNumber = i;
  }
}
let minNumber = arr[0];
let minFindNumber = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minNumber) {
    // Nếu arr[i] nhỏ hơn minNumber thì gán lại minNumber
    minNumber = arr[i];
    minFindNumber = i;
  }
}

console.log(
  `Số lớn nhất có giá trị là ${maxNumber} and address ${maxFindNumber}`
);
console.log(
  `Số nhỏ nhất có giá trị là ${minNumber} and address ${minFindNumber}`
);

// Bài 2
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng.
// Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

// Mảng số nguyên ban đầu
const numbers = [2, 5, 8, 11, 13, 20];
function isPrice(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Hàm tính trung bình số nguyên tố trong mảng
function sumPrice() {
  let sum = 0;
  let count = 0;
  for (let num of numbers) {
    if (isPrice(num)) {
      sum += num;
      count++;
    }
  }
  if (count === 0) {
    return "Không có số nguyên tố";
  } else {
    return sum / count;
  }
}

const result = sumPrice(numbers);
console.log(result);

// Bài 3
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữ lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

function moveDuplicate(array) {
  return array.reduce(function (prev, current) {
    if (!prev.includes(current)) {
      prev.push(current);
    }
    return prev;
  }, []);
}
const inputArray = [1, 2, 2, 3, 3, 4, 4, 5, 10, 10];
const outputArray = moveDuplicate(inputArray);
console.log(outputArray);

// Bài 4
var numbersArray = [5, 1, 9, 8, 13, 10, 12, 7];
var element = 6;
// Sắp xếp đoạn code theo thứ tự tăng dần
numbersArray.sort((a, b) => a - b);
// Sử dụng vòng lặp for để tìm vị trí
var indexNumber;
for (let indexNumber = 0; indexNumber < numbersArray.length; indexNumber++) {
  if (element <= numbersArray[indexNumber]) {
    break;
  }
}
// Sử dụng slice để xoá thêm phần tử
numbersArray.splice(indexNumber, 0, element);
console.log(numbersArray);
