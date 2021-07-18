
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navbrand = $(".navbar-brand");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $navbrand.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function fullScreenImage(element) {
  document.getElementById("modalImage").src = element.src;
  document.getElementById("imagePopup").style.display = "block";
}
