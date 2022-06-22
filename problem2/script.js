(() => {
  renderRandomArray();
})();

function renderRandomArray() {
  document.querySelector(".btn").addEventListener("click", () => {
    let length = parseInt(document.querySelector(".length-arr").value);
    let arr = Array.from({ length: length }, () =>
      Math.floor(Math.random() * length)
    );
    let arrText = "Result: [" + arr.join(", ") + "]";
    document.querySelector(".result").innerText = arrText;
  });
}
