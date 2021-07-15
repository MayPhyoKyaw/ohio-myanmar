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
    firstname: form.name.value,
    surname: form.surname.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  window.open(`mailto:ohio.jl.center@gmail.com?subject=${values.subject}&body=I'm ${values.firstname} ${values.surname} <${values.email}>.
      Here is the message:
      ${values.message}`
  );
}