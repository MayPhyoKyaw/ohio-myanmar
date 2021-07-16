
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navbrand = $(".navbar-brand");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $navbrand.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
