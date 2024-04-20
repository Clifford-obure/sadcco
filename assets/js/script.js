'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener('click', function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });
}

/**
 * header
 */

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
});

$(document).ready(function () {
  $('#contactForm').submit(function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var formData = {
      email: $('input[name=email_address]').val(),
      message: $('textarea[name=message]').val(),
    };

    // Send form data to email address using a service like Formspree
    $.ajax({
      type: 'POST',
      url: 'https://formspree.io/f/xdoqyzjn', // Replace with your Formspree endpoint
      data: formData,
      dataType: 'json',
    })
      .done(function (response) {
        // Success message or redirection
        alert('Your message has been sent!');
        window.location.href = 'https://yourwebsite.com/thank-you'; // Redirect to thank you page
      })
      .fail(function (error) {
        // Error message
        alert('An error occurred. Please try again later.');
      });
  });
});
