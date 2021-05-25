const nav = document.querySelector("nav");

document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
