const btn = document.querySelector(".main-text-button");
const popupbg = document.querySelector('.pop-up-bg');
const popup = document.querySelector('.pop-up');
const mobileBtn = document.querySelector('.header-mobile-button');
const mobileNav = document.querySelector('.header-nav-wrapper');

btn.addEventListener('click', e => {
    popupbg.classList.add('show');
});

popupbg.addEventListener('click', e => {
    popupbg.classList.remove('show'); 
});

popup.addEventListener('click', e => {
    e.stopPropagation();
});

mobileBtn.addEventListener('click', e => {
    mobileBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
})
