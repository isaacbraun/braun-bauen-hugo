import Alpine from "js/alpinejs.min.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

/**
 * Alpine magic function to create a swiper instance with passed element
 * @param {HTMLElement} elem
 * @returns {null}
 */
// Alpine.magic('initSwiper', () => elem => {
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  cssMode: true,
  initialSlide: 2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    425: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    // 700: {
    //   slidesPerView: 2.5,
    //   spaceBetween: 24,
    // },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 36,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Alpine.start();
