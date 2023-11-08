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
