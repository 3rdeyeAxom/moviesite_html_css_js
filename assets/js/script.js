
'use strict';

//  NAVBAR VARIABLEs


const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navClose = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector("[data-overlay]");
const gotop = document.querySelector("[data-go-top]");



navOpenBtn.addEventListener('click', function(){
    navbar.classList.add('active');
    overlay.classList.add('active');
})
navClose.addEventListener('click', function(){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
})
navbar.addEventListener('click', function(){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
})
// const navElemArr = [navOpenBtn, navClose, navbar];

// for(let i = 0; i < navElemArr.length; i++){
//     navElemArr[i].addEventListener('click', function(){
//         navbar.classList.toggle('active');
//         overlay.classList.toggle('active');
//         document.body.classList.toggle('active');
        
//     })
// }

const header = document.querySelector("[data-header]");

window.addEventListener('scroll', function(){
        this.window.scrollY >= 10 ? header.classList.add('active') : header.classList.remove('active'); 
})

window.addEventListener("scroll", function(){
    this.window.scrollY >= 500 ? gotop.classList.add('active') : gotop.classList.remove('active');
});