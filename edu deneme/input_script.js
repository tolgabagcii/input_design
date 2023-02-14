// Element referansları:

let div = document.querySelector(".input__field");
let label = document.querySelector(".input__label");


// İnput'a focus uygulama işlemi ve animasyonu oynatma:

label.addEventListener('focus', () => {
    if (label.value == "") {
        div.style.width = "100%";
        div.style.animation = "grow 1s ease-in-out";
    }
  });

  label.addEventListener('blur', () => {
    if (label.value == "") {
        div.style.width = "50%";
        div.style.animation = "grow_reverse 1s ease-in-out ";
    }
  });


// E-posta algoritma işlemi:

label.addEventListener("input", function(){
    if (label.value == "") {
        div.style.background = "blue";
    } else {
        if (label.value.includes("@")) {
            if (label.value.includes(".com")) {
                div.style.background = "green";
            } else {
                div.style.background = "red";
            }
          } else {
            div.style.background = "red";
          }
    }
});
