$(document).ready(function(){
    $("#mainMenu").on("click","a",function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1000);

    });
});
const popup = document.querySelector('.wrap')
const btn =  document.querySelector('.btn')
const close = document.querySelector('.close')

function showPopup() {
    popup.classList.toggle('show')
}

btn.addEventListener('click', showPopup)
close.addEventListener('click', showPopup)

console.log(popup)
console.log(btn)
console.log(close)