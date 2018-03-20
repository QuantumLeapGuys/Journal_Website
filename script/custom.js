window.onscroll = function () { headerScrollFunction() };

var header = document.getElementById("journalHeader");
var sticky = header.offsetTop;

function headerScrollFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$( document ).ready(function() {
    $('.ease_jq').fadeOut(5,"linear");
    $('.ease_jq').fadeIn(500,"linear");
});


