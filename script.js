"use strict";

const slides = document.querySelectorAll(".slide");
const btnPrevs = document.querySelectorAll(".btn--prev");
const btnNexts = document.querySelectorAll(".btn--next");
let curSlide = 0;
const maxSlide = slides.length - 1;
const btn = document.querySelectorAll("btn");

goToSlide(0);

btnNexts.forEach((btnNext) => {
  btnNext.addEventListener("click", () => {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  });
});

btnPrevs.forEach((btnPrev) => {
  btnPrev.addEventListener("click", () => {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  });
});

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;

    if (s.style.transform !== "translateX(0%)") {
      s.style.opacity = "0";
      s.style.visibility = "hidden";
    } else {
      s.style.opacity = "1";
      s.style.visibility = "visible";
    }
  });
}
