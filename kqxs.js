// Khai báo các biến cần dùng
const results = document.querySelectorAll(".result .number");
const spinBtn = document.getElementById("spin");
const numbers = []; // Mảng lưu trữ các số ngẫu nhiên

// Hàm tạo số ngẫu nhiên từ 0 đến 99
function generateNumber() {
  return Math.floor(Math.random() * 100);
}

// Hàm quay số
function spin() {
  // Tạo 5 cặp số ngẫu nhiên
  for (let i = 0; i < 5; i++) {
    const number1 = generateNumber();
    const number2 = generateNumber();

    // Hiển thị số lên trên màn hình với hiệu ứng số nhảy
    setTimeout(() => {
      results[i].classList.add("spin");
      results[i].textContent = "--";
      setTimeout(() => {
        results[i].textContent =
          number1.toString().padStart(2, "0") 
      }, 1000);
    }, i * 1000);
  }
}

// Bắt sự kiện click vào nút Quay số
spinBtn.addEventListener("click", () => {
  spin();
});




