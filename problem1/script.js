(() => {
  responsiveAction();
})();

function responsiveAction() {
  document.querySelector(".icon-btn").addEventListener("click", () => {
    let navMenu = document.querySelector(".nav-menu");
    let navClassList = navMenu.classList;
    setTimeout(() => {
      if (navClassList.contains("res")) {
        navClassList.remove("res");
      } else {
        navClassList.add("res");
      }
    }, 100);
  });
}
