const originalText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimusvitae in cum consequuntur expedita, facilis unde animi cupiditate laborequod, laboriosam iure iusto. Aliquam reprehenderit ea similique doloresfacere.";
//split Cắt chuỗi thành mảng
const words = originalText.split(" ");
let currentsIndex = 0;

function updateText() {
  const contentElement = document.getElementById("content");
  const newWords = words.map(function (word, index) {
    if (index === currentsIndex) {
      return `<span class="red-text">${word}</span>`;
    }
    return word;
  });
  // Nối mảng thành chuỗi
  contentElement.innerHTML = newWords.join(" ");
  currentsIndex = (currentsIndex + 1) % words.length;
}

setInterval(updateText, 1000);
