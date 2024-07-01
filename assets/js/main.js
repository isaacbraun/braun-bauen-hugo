import Alpine from "js/alpinejs.min.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

/**
 * Alpine magic function to create a swiper instance with passed element
 * @param {HTMLElement} elem
 * @returns {null}
 */
// Alpine.magic('initSwiper', () => elem => {
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Alpine.start();
