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
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Alpine.start();
