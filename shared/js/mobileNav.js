//------------------MOBILE NAVIGATION--------------------//
const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.header-primary__nav');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        mobileMenu.classList.add('open');
        menuOpen = true;
    } else {
        mobileMenu.classList.remove('open');
        menuOpen = false;
    }

});

window.onresize = () => {
    if(window.innerWidth > 990.98){
        mobileMenu.classList.remove('open');
        menuOpen = false;
    }
}

menuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle(menuOpen);
});

//-----------------END OF MOBILE NAVIGATION--------------//