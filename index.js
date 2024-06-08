const navbar = document.querySelector(".navbar");
const navTab = document.querySelector(".nav-tab");

navTab.addEventListener("mouseover", () => {
  navbar.classList.add("open");
});

document.addEventListener("mousemove", (event) => {
  const isMouseOverNavbar =
    event.clientX <= navbar.offsetLeft + navbar.offsetWidth;
  const isMouseOverTab =
    event.clientX <= navTab.offsetLeft + navTab.offsetWidth &&
    event.clientY >= navTab.offsetTop &&
    event.clientY <= navTab.offsetTop + navTab.offsetHeight;

  if (!isMouseOverNavbar && !isMouseOverTab) {
    navbar.classList.remove("open");
  }
});
