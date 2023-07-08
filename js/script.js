const scrollbtn = document.querySelector(".go-to-top");
function refereshbtnvis() {
     if (document.documentElement.scrollTop <= 550) {
          scrollbtn.style.display = "none";
     } else {
          scrollbtn.style.display = "block";
     }
}
scrollbtn.addEventListener("click", function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll", function (e) {
     refereshbtnvis();
});