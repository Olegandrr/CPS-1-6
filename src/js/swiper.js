import Swiper from "swiper/bundle";

let swiper;


export function swiperInit() {
  if (window.innerWidth < 768) {
    swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
          clickable: true,
        },
    });
      
  }
} 



