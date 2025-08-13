$(document).ready(function(){
$('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots'
}); 

let hamberger = document.querySelector('.hamberger');
let cancel = document.querySelector('.cancel');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
mobileNav.classList.add('open');
});

cancel.addEventListener('click', function(){
mobileNav.classList.remove('open');
});

});
