const items = document.querySelectorAll("ul li");
const indicator = document.querySelector(".indicator");
function moveIndicator(element) {
  const left =
    element.offsetLeft + element.offsetWidth / 2 - indicator.offsetWidth / 2;
  indicator.style.left = `${left}px`;
}
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
    moveIndicator(item);
  });
});
window.onload = () => {
  const activeItem = document.querySelector("ul li.active");
  if (activeItem) moveIndicator(activeItem);
};
