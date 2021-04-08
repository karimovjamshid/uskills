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
        let headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > 1){
          header.addClass('fixed');
        }else{
          header.removeClass('fixed');
        }
    });