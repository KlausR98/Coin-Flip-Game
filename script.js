const coin = document.querySelector(".coin");
const flipButton = document.querySelector("#flip-button");
const resetButton = document.querySelector("#reset-button");
let heads = 0;
let tails = 0;

// flipButton.addEventListener("click", () => flipCoin(coin, heads, tails));
resetButton.addEventListener("click", () => {
  heads = 0;
  tails = 0;
  changeScore();
});

// function flipCoin(coin, heads, tails) {
//   let i = Math.floor(Math.random() * 20);
//   coin.style.animation = "none";
//   if (i) {
//     setTimeout(function () {
//       coin.style.animation = "head-spin 3s forwards";
//     }, 100);
//     heads++;
//   } else {
//     setTimeout(function () {
//       coin.style.animation = "tail-spin 3s forwards";
//     }, 100);
//     tails++;
//   }
//   setTimeout(changeScore, 3000);
//   turnOffFlipButton();
// }

flipButton.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  // if (heads++) {

  // }
  if (i) {
    setTimeout(function () {
      coin.style.animation = "head-spin 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "tail-spin 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(changeScore, 3000);
  turnOffFlipButton();
});

function turnOffFlipButton() {
  flipButton.disabled = true;
  setTimeout(function () {
    flipButton.disabled = false;
  }, 3000);
}

function changeScore() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
