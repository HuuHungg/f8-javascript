// Bài 1 Lấy kết quả giao giữa hai mảng
var arrA = [1, 4, 3, 2, -4];
var arrB = [5, 2, 6, 7, 1, -4];
// fillter trả về một mảng mới, mảng mới được lấy tử mảng cũ, mảng cũ return true;
const filteredArray = arrA.filter(function (array) {
  // includes return true false;
  return arrB.includes(array);
});
console.log(filteredArray);

// Bài 2 Làm phẳng array sau (Chuyển về mảng 1 chiều)
// Sử dụng flat của es6 in the ECMA 2019
// Có thể truyền vào flat(0), flat(1), flat(2),..
var arrC = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
const flatten = arrC.flat(Infinity);
console.log(flatten);

// Bài 3 Tách phần tử trong mảng theo đúng kiểu dữ liệu
const arr = [
  [1, "a", true],
  [2, "b", false],
];
// Sử dụng reduce để lặp qua mảng đầu tiên
var transportedArr = arr[0].reduce(function (curr, prev, index) {
  // Mảng khởi tạo ban đầu là rỗng
  // Sử dụng vòng lặp map để tạo ra mảng mới, sử dụng push để thêm phần tử mới vào cuối mảng
  curr.push(
    arr.map(function (value) {
      return value[index];
    })
  );
  return curr;
}, []);
console.log(transportedArr);
// output  [ [ 1, 2 ], [ 'a', 'b' ], [ true, false ] ]

// Bài 4
var dataType = [
  {
    title: "Tiêu đề đoạn 1",
    image:
      "https://plus.unsplash.com/premium_photo-1692121350305-f8fbbcd8f606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3520&q=80",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Tiêu đề đoạn 2",
    image:
      "https://images.unsplash.com/photo-1636520529043-8fdaac4701e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2278&q=80",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Tiêu đề đoạn 3",
    image:
      "https://images.unsplash.com/photo-1691433230427-1ad3bb167d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Tiêu đề đoạn 4",
    image:
      "https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2150&q=80",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const showHtml = `
  <div class = "posts">
    ${dataType
      .map(function (data, index) {
        return `
          <div class = "post-item">
            <img 
              src = "${data.image}"
              alt = "${data.title}"
              class = "${index % 2 !== 0 ? "right" : ""}"
            />
            <h2>${data.title}</h2>
            <p>${data.content}</p>
          </div>
        `;
      })
      .join("")}
  </div>
`;
document.write(showHtml);
