const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// const quest = document.querySelector(".quest");
// const answer = document.querySelector(".answer")
// const up = document.querySelector(".up")

// quest.addEventListener("click" , function(e) {
//   answer.classList.toggle("show");
//   up.classList.toggle("rotate");
// });

$('.faq li .question').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});


// back to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
