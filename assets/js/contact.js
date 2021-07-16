// CONSTANTS
const reg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// handleblur
var form = document.getElementById("contact-form");
form.email.addEventListener("blur", function (event) {
  validateField(this);
});
form.subject.addEventListener("blur", function (event) {
  validateField(this);
});
form.message.addEventListener("blur", function (event) {
  validateField(this);
});

function validateField(field) {
  var isOk = false;
  if (field.type === "email") {
    if (!reg.test(String(field.value).toLowerCase())) {
      onInvalid(field, "Please enter a valid email");
    } else {
      onValid(field);
      isOk = true;
    }
  } else if (field.type === "text") {
    if (field.value.length < 3) {
      onInvalid(field, "Subject should contain at least 3 three characters");
    } else if (field.value.length > 30) {
      onInvalid(field, "Subject should be at most 30 three characters");
    } else {
      onValid(field);
      isOk = true;
    }
  } else {
    if (field.value === "") {
      onInvalid(field, "Please enter a message");
    } else {
      onValid(field);
      isOk = true;
    }
  }
  return isOk;
}

function onInvalid(field, feedback) {
  field.style.border = "1px solid tomato";
  field.nextElementSibling.innerHTML = feedback;
  field.nextElementSibling.style.display = "block";
}

function onValid(field) {
  field.style.border = "1px solid #899456";
  field.nextElementSibling.style.display = "none";
}

function validateAll(form) {
  validateField(form.email) &&
    validateField(form.subject) &&
    validateField(form.message) &&
    gotoMail({
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    });
}

// submitForm
function submitForm(form) {
  var values = {
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };
  validateAll(form);
}
// reset form

function resetForm() {
  document.getElementById("contact-form").reset();
}

// go to mail
function gotoMail(values) {
  resetForm();
  window.open(
    `mailto:ohio.jl.center@gmail.com, ohio.mi.coltd@gmail.com?subject=${values.subject}&body=${values.message}`
  );
}
