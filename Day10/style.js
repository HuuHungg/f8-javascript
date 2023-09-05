// Các phần tử HTML
const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carouse-inner");
const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");
const dots = document.querySelectorAll(".dots li");

var itemWidth = carouselInner.clientWidth;
const items = carouselInner.children;
const totalWidth = items.length * itemWidth;
carouselInner.style.width = `${totalWidth}px`;

let position = 0;
let isDragging = false;
let initialOffsetX;
let check = false;
let intervalId;

// Hàm cập nhật carousel
const updateCarousel = () => {
  let newPosition = position;
  if (newPosition > 0) {
    newPosition = 0;
  } else if (newPosition < -totalWidth + itemWidth) {
    newPosition = -totalWidth + itemWidth;
  }
  // Áp dụng hiệu ứng chuyển động
  carouselInner.style.transition = "transform 0.2s ease";
  carouselInner.style.transform = `translateX(${newPosition}px)`;
  // Cập nhật vị trí chính thức
  position = newPosition;
  // Cập nhật trạng thái của các chấm
  updateDots();
};

// Hàm cập nhật trạng thái của các chấm
const updateDots = () => {
  const activeIndex = Math.round(Math.abs(position) / itemWidth);
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
};

// Xử lý sự kiện mousedown
const handleMouseDown = (e) => {
  isDragging = true;
  initialOffsetX = e.clientX - carousel.getBoundingClientRect().left;
  carouselInner.style.transition = "none";
  carouselInner.classList.add("active");
};

// Xử lý sự kiện mousemove
const handleMouseMove = (e) => {
  e.preventDefault();
  if (isDragging) {
    const currentOffsetX = e.clientX - carousel.getBoundingClientRect().left;
    const moveWidth = currentOffsetX - initialOffsetX;
    const threshold = itemWidth / 2;

    if (Math.abs(moveWidth) > threshold && !check) {
      position += moveWidth < 0 ? -itemWidth : itemWidth;
      check = true;
      updateCarousel();
    } else {
      carouselInner.style.transform = `translateX(${position + moveWidth}px)`;
    }
  }
};

// Xử lý sự kiện mouseup
const handleMouseUp = () => {
  isDragging = false;
  check = false;
  updateCarousel();
  carouselInner.classList.remove("active");
};

// Xử lý sự kiện click nút "Next"
nextBtn.addEventListener("click", () => {
  position = Math.max(position - itemWidth, -totalWidth + itemWidth);
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  position = Math.min(position + itemWidth, 0);
  updateCarousel();
});

// Xử lý sự kiện click chấm (điểm) để chuyển trang
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = -index * itemWidth;
    updateCarousel();
  });
});

// Khởi tạo carousel
updateCarousel();
carousel.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
