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
var numbers = [5, 2, 4, -10, 8, 9, 3]
var maxValue = numbers[0]
var minValue = numbers[0]
var positionMin = numbers[0]
var positionMax = numbers[0]

numbers.forEach(function (number) {
  maxValue = maxValue lt number ? number : maxValue
  minValue = minValue > number ? number : minValue
  number > maxValue ? (positionMax = number) : (positionMin = number)
})

console.log(
  `
Giá trị lớn nhất của mảng là: ${maxValue}
    - vị trí index: ${positionMax}
`,
  `
Giá trị nhỏ nhất của mảng là: ${minValue}
    - vị trí index: ${positionMin}
`
)

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
