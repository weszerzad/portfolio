// import AutoTyping from "./autotyping";

const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerButtonBarList = document.querySelectorAll(
  "#hamburger-button-bar"
);
const hlinks = document.querySelectorAll("#hLink");

const hamburgerMenu = document.querySelector("#hamburger-menu");

const moon = document.querySelector("#moon")
const body = document.querySelector("body")

hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
  for (const bar of hamburgerButtonBarList) {
    bar.classList.toggle("bg-black");
    bar.classList.toggle("bg-white");
  }
});

hlinks.forEach((hlink) => {
  hlink.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hidden");
    for (const bar of hamburgerButtonBarList) {
      bar.classList.toggle("bg-black");
      bar.classList.toggle("bg-white");
    }
  });
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})


