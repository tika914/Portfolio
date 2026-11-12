const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

// 制作物内のすべての画像にクリックイベントを設定
document.querySelectorAll(".work-item img").forEach(img => {
  img.style.cursor = "zoom-in"; // カーソルを虫眼鏡にする
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src; // クリックされた画像のパスをセット
  });
});

// 閉じるボタン、または背景クリックで閉じる
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
