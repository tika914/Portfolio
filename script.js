const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

// ページ内のすべての画像（モーダル自身を除く）にクリックイベントを設定
document.querySelectorAll("img:not(#modalImage)").forEach(img => {
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
