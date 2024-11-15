// ============color==============>
const colorBtn = document.getElementById("color");
const palette = document.querySelector(".colorPalette");

colorBtn.onclick = () => {
  palette.classList.toggle("active");
  barsBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".colorPalette .color").forEach((btn) => {
  btn.onclick = () => {
    const color = btn.style.background;
    palette.classList.remove("active");

    document.querySelector(":root").style.setProperty("--main", color);
  };
});
// ============menu==============>
const barsBtn = document.getElementById("bars");
const navbar = document.querySelector(".navbar");

barsBtn.onclick = () => {
  barsBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  palette.classList.remove("active");
};

// =========scroll=========>
window.onscroll = () => {
  palette.classList.remove("active");
  barsBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// ========DarkTheme=======>
const themeBtn = document.getElementById("moon");
let getTheme = localStorage.getItem("theme");
const darkEnable = () => {
  themeBtn.classList.replace("fa-moon", "fa-sun");
  document.body.classList.add("dark");
  localStorage.setItem("theme", "enabled");
};
const darkDesable = () => {
  themeBtn.classList.replace("fa-sun", "fa-moon");
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "desabled");
};
if (getTheme === "enabled") {
  darkEnable();
}

themeBtn.onclick = () => {
  palette.classList.remove("active");
  barsBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  let getTheme = localStorage.getItem("theme");
  if (getTheme === "desabled") {
    darkEnable();
  } else {
    darkDesable();
  }
};
