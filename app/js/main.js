"use strict";

document.addEventListener("DOMContentLoaded", () => {


  if (document.querySelector('.top-slider')) {
    const topSlider = new Swiper('.top-slider', {
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }

































});