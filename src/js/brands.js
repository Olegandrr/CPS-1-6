export const showMoreButton = document.getElementById("show-more");
export const brandItems = document.querySelectorAll(".brands__item:nth-child(n+7)");

export function push() {
  let toggle = false;
  showMoreButton.addEventListener('click', () => {
  if (!toggle) {
    showMoreButton.classList.toggle("show-more--active");
    for (let i = 0; i < brandItems.length; i++) {
      brandItems[i].classList.remove("item--close");
      brandItems[i].classList.toggle("item--show");
    }
    showMoreButton.textContent = "Скрыть";
    toggle = true;
  } else if (toggle) {
    showMoreButton.classList.toggle("show-more--active");
    let delay = 300;
    for (let i = 0; i < brandItems.length; i++) {
      brandItems[i].classList.add("item--close");
      setTimeout(function() {
        brandItems[i].classList.toggle("item--show");
      }, delay);
      delay -= 20;}
    setTimeout(function() {showMoreButton.textContent = "Показать все"}, 290);
    toggle = false;} 
});
};
