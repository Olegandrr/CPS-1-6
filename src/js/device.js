export const showMoreButtonDevice = document.getElementById("show-more-device");
export const deviceItems = document.querySelectorAll(".devices__item:nth-child(n+4)");


export function pushDevice() {
  let flag = false;
  showMoreButtonDevice.addEventListener('click', () => {
  if (!flag) {
    showMoreButtonDevice.classList.toggle("show-more--active");
    for (let i = 0; i < deviceItems.length; i++) {
      deviceItems[i].classList.remove("item--close");
      deviceItems[i].classList.toggle("item--show");
    }
    showMoreButtonDevice.textContent = "Скрыть";
    flag = true;
  } else if (flag) {
    showMoreButtonDevice.classList.toggle("show-more--active");
    let delay = 300;
    for (let i = 0; i < deviceItems.length; i++) {
      deviceItems[i].classList.add("item--close");
      setTimeout(function() {
        deviceItems[i].classList.toggle("item--show");
      }, delay);
      delay -= 20;}
    setTimeout(function() {showMoreButtonDevice.textContent = "Показать все"}, 290);
    flag = false;} 
});
}







