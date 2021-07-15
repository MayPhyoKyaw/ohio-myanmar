$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navbrand = $(".navbar-brand");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $navbrand.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// go to mail
function gotoMail(form) {
  var values = {
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  window.open(`mailto:ohio.jl.center@gmail.com?subject=${values.subject}&body=${values.message}`
  );
}