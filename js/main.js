jQuery(document).ready(function ($) {
    $('.skills-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000
    });
    $('.quality-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000
    });
// *************** Burger menu ***************
const menuBtn = document.querySelector('.burger');
const miniHeader = document.querySelector('.mini-header');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('burger__open');
        miniHeader.classList.add('active');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('burger__open');
        miniHeader.classList.remove('active');
        menuOpen = false;
    }
});

// Sticky navbar
    let header = $('#header');
    let scrollPos = $(window).scrollTop();


    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > 1){
          header.addClass('fixed');
        }else{
          header.removeClass('fixed');
        }
    });



    // Mini filter
    const miniFilterGroup = document.querySelectorAll('.mini-filter__group');

    miniFilterGroup.forEach(function (item) {
        item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active');
    })
    })
    


});