//--------------------PRELOADER-------------------//
const preloader = document.querySelector(".preloader");

const fadeOutEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity = 0;
  } else {
    preloader.style.display = "none";
    clearInterval(fadeOutEffect);
  }
}, 500);
  

window.addEventListener('onload', () => fadeOutEffect);

//------------------------------------------------//