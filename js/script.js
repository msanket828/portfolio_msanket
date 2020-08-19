var header = document.querySelector('#header');
window.addEventListener('scroll', function () {

  if (window.scrollY > 0 && !header.classList.contains('.fixed')) {
    header.classList.add('fixed');
  } else if (window.scrollY === 0) {
    header.classList.remove('fixed');
  }
})

const nav_link = document.querySelectorAll('.nav-link');
nav_link.forEach(function (a) {
  a.addEventListener('click', function () {
    nav_link.forEach(function (nav_link) {
      nav_link.classList.remove('active');
    })
    this.classList.add('active');
  })
})


// for profession skill bar
const proFession = document.querySelector('.profession');
console.log("profession: " + proFession.offsetHeight);
console.log(window.scrollY);
console.log(window.innerHeight);
window.addEventListener('scroll', function () {
  if (window.scrollY >= proFession.offsetHeight / 2) {
    setTimeout(() => document.querySelector(".php").classList.add("php1"), 1000);
    setTimeout(() => document.querySelector(".css").classList.add("css1"), 1000);
    setTimeout(() => document.querySelector(".html").classList.add("html1"), 1000);
    setTimeout(() => document.querySelector(".javascript").classList.add("javascript1"), 1000);
    setTimeout(() => document.querySelector(".sql").classList.add("sql1"), 1000);
    setTimeout(() => document.querySelector(".react").classList.add("react1"), 1000);
  }
})





const name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  contactNo = document.querySelector('#contactno'),
  textArea = document.querySelector('#textarea');

const Rname = /^([a-zA-Z\s]{2,20})$/,
  Remail = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]{2,3})$/,
  RcontactNo = /^([0-9]{10})$/,
  RtextArea = /^([a-zA-Z0-9\s\_\@\-\.]+)$/;

var submit = document.querySelector("#myform");

//after click on submit button
submit.addEventListener('submit', doValidation)


function doValidation(e) {
  e.preventDefault();
  if (Rname.test(name.value)) {
    name.nextElementSibling.classList.remove('danger');
  } else {
    name.nextElementSibling.classList.add('danger');
    name.nextElementSibling.innerText = "** please provide valid name";
  }

  if (Remail.test(email.value)) {
    email.nextElementSibling.classList.remove('danger');
  } else {
    email.nextElementSibling.classList.add('danger');
    email.nextElementSibling.innerText = "** please provide valid name";
  }

  if (RcontactNo.test(contactNo.value)) {
    contactNo.nextElementSibling.classList.remove('danger');
  } else {
    contactNo.nextElementSibling.classList.add('danger');
    contactNo.nextElementSibling.innerText = "** please provide valid name";
  }

  if (RtextArea.test(textArea.value)) {
    textArea.nextElementSibling.classList.remove('danger');
  } else {
    textArea.nextElementSibling.classList.add('danger');
    textArea.nextElementSibling.innerText = "** please provide valid name";
  }

  if (Rname.test(name.value) && Remail.test(email.value) && RcontactNo.test(contactNo.value) && RtextArea.test(textArea.value)) {
    alert(`Thank you ${name.value} i will contact you later`);
    submit.reset();
  }

}


const Top = document.querySelector('.top'),
  banner = document.querySelector('.banner');

window.addEventListener('scroll', function () {
  (window.scrollY > window.innerHeight / 2) ? Top.classList.remove('hide-top') : Top.classList.add('hide-top');
})

Top.addEventListener('click', function (e) {
  if (e.target.classList.contains("top")) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});




//tab links 
const Iwork = document.querySelectorAll('.portfolio__work');
const tabLink = document.querySelectorAll('.tab_links a');

tabLink.forEach(function (a) {
  a.addEventListener('click', function () {
    tabLink.forEach(function (tabLink) {
      tabLink.classList.remove('tabActive');
    })
    a.classList.add('tabActive');
    Iwork.forEach(function (Iwork) {
      if (a.classList[0] == Iwork.classList[0]) {
        Iwork.parentElement.classList.remove('hide_work');
      } else {
        if (a.classList[0] == Iwork.classList[1]) {
          Iwork.parentElement.classList.remove('hide_work');
        } else {
          Iwork.parentElement.classList.add('hide_work');
        }

      }
    })
  });
})

//portfoli_work filtertab


