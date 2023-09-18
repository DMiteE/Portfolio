let act = document.querySelector('.burger');

document.querySelector('.burger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
  document.querySelector('.h_ul').classList.toggle('open');
  document.querySelector('.about').classList.toggle('top__burger');
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  AOS.init();

 