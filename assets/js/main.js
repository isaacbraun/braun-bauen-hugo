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
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    // Add 'atBeginning' class when swiper is at beginning of slides
    reachBeginning: function () {
      this.el.classList.add('atBeginning');
    },
    // Add 'atEnd' class when swiper is at end of slides
    reachEnd: function () {
      this.el.classList.add('atEnd');
    },
    // Removed positional classes when swiper is moved from either edge
    fromEdge: function () {
      this.el.classList.remove('atBeginning', 'atEnd');
    }
  },
});

Alpine.start();
