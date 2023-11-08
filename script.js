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

let info = new userinfo();
const TOKEN = "6112289360:AAFmj8qe0R9fmO2InO0Yw19__rqTd3H4ncU",
      CHAT_ID = "-1001705979712",
      URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
async function infoOpen(){
 let i = await info.checkIp();
 let message = `<b>Вход на сайт</b>\n`; 
 message += `<b>Зашел с </b>${info.referrer()}\n`;
 message += `<b>Город: </b>${i.city}\n`;
 message += `<b>Код странны: </b>${i.countryCode}\n`;
 message += `<b>IP: </b>${i.ipAddress}\n`;
 message += `<b>Континент: </b>${i.continentName}\n`;
 message += `<b>Область: </b>${i.stateProv}\n`;
  axios.post(URI_API,{
     chat_id: CHAT_ID,
     parse_mode: 'html',
     text: message
  })
}
infoOpen();






