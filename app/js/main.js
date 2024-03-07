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
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
    });

  }


  function toggleTooltip(element) {
    let tooltips = document.querySelectorAll(element);

    document.addEventListener('click', (event) => {
      tooltips.forEach((tooltip) => {
        if (tooltip.contains(event.target)) {
          tooltip.classList.toggle('active');
        } else {
          tooltip.classList.remove('active');
        }
      });
    });
  }

  if (document.querySelector('.tooltip')) {
    toggleTooltip('.tooltip');
  }

  function mobileMenu(btn) {
    let hamburger = document.querySelector(btn),
      headerInner = document.querySelector('.header__inner'),
      navigation = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
      headerInner.classList.toggle('active');
      navigation.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    });
  }

  if (document.querySelector('.hamburger')) {
    mobileMenu('.hamburger');
  }





























});