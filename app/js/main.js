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






  function initializeSpoilers() {
    document.body.addEventListener('click', (event) => {
      const spoilers = document.querySelectorAll('.spoiler');

      spoilers.forEach((spoiler) => {
        if (!spoiler.contains(event.target)) {
          spoiler.classList.remove('active');
        } else {
          spoiler.classList.toggle('active');
        }
      });
    });
  }


  if (document.querySelector('.spoiler')) {
    initializeSpoilers();
  }


  


  if (document.querySelector("#copyButton")) {
    document.querySelector("#copyButton").addEventListener("click", function () {
      var textToCopy = document.querySelector("#textToCopy").innerText;

      var input = document.createElement('input');
      input.setAttribute('value', textToCopy);
      document.body.appendChild(input);

      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);

      console.log('Text copied to clipboard');
    });
  }















});