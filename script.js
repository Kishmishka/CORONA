"use strict";
const burgerMenu = document.querySelector('.burger');
if (burgerMenu){
   const menuBody= document.querySelector('.menu__body');
   burgerMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock');
      menuBody.classList.toggle('_active');
      burgerMenu.classList.toggle('_active');
   })
}
