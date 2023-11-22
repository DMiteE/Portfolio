class userinfo{
    constructor(){
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
    }

    referrer(){
        return document.referrer;
    }


    async checkIp(){
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        return data;
    }
}

const TOKEN = "6112289360:AAFmj8qe0R9fmO2InO0Yw19__rqTd3H4ncU",
      CHAT_ID = "-1001705979712",
      URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;




let info = new userinfo();


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
