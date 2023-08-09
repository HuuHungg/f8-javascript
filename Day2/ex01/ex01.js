// Bài 1
function priceTaxi(km) {
  let fare = 0;
  if (km <= 1) {
    fare = 15000;
  } else if (km > 1 && km <= 5) {
    fare = 13500;
  } else {
    fare = 11000;
  }
  if (km > 120) {
    fare *= 0.9; // Giảm 10%
  }
  return fare;
}

// Truyền tham số vào function

let distance = -10;
let totalFare = priceTaxi(distance);
console.log(`Tiền cước taxi cho ${distance} là : ${totalFare}`);

// Bài 2
function calutarbill(usage) {
  let totalCount = 0;

  if (usage <= 50) {
    totalCount = usage * 1.678;
  } else if (usage <= 100) {
    totalCount = 50 * 1.678 + (usage - 50) * 1.734;
  } else if (usage <= 200) {
    totalCount = 50 * 1.678 + 50 * 1.734 + (usage - 100) * 2.014;
  } else if (usage <= 300) {
    totalCount = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (usage - 200) * 2.536;
  } else if (usage <= 400) {
    totalCount =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      (usage - 300) * 2.834;
  } else {
    totalCount =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      100 * 2.834 +
      (usage - 400) * 2.927;
  }
  return totalCount;
}
const usageBill = 100;
const billAmount = calutarbill(usageBill);
console.log(`Số tiền phải đóng ${usageBill} kwh là: ${billAmount} đồng`);

// Bài 3
// s= 1*2 + 2*3 + ... + n*(n + 1) => CT n *(n + 1)
function calculateExpression(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i * (i + 1);
  }
  return sum;
}

let n = 4;
if (n % 1 === 0) {
  let result = calculateExpression(n);
  console.log(`Result: ${result}`);
} else {
  console.log(`N Không phải là số nguyên tố`);
}

// Bài 4
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về

function isPrice(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Gọi hàm trong câu điều kiện if else
let result = 6;
if (isPrice(result)) {
  console.log(`${result} là số nguyên tố`);
} else {
  console.log(`${result} không phải là số nguyên tố`);
}

// Bài 5 // Giống bài *
document.write("============== Bài 5 ============= <br/>");
let lines = 5;
let startLine = 1;
for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(startLine + " ");
    startLine++;
  }
  document.write("<br/>");
}

// Bài 6 //
document.write("============= Bài 6 =============== <br/>");
function drawChess(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isBlack = (i + j) % 2 !== 0;
      const backgroundColor = isBlack ? "#000" : "fff";
      document.write(
        `<span style="display:inline-block; width: 50px; height: 50px; border: 1px solid #000; background: ${backgroundColor}"></span>`
      );
    }
    document.write("<br/>");
  }
}
drawChess(8);

//Bài 7
document.write("========= Bài 7 =============");
function multiCation() {
  for (let i = 1; i <= 10; i++) {
    document.write(`<h3>Bảng cửu chương ${i}</h3>`);
    for (let j = 1; j <= 10; j++) {
      const result = i * j;
      document.write(`${i} x ${j} = ${result} <br/>`);
    }
  }
}
multiCation();

// Bài 8
function calculateRecursive(N) {
  if (N === 1) {
    return 1;
  }
  return 1 / N + calculateRecursive(N - 1);
}

const N = 5;
const fine = calculateRecursive(N);
console.log(fine);
