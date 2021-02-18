$(function () {
  $("#hamburger-menu").click(openMenu);
})

// var navbar = document.createElement('style');
// navbar.innerHTML = `
// #nav-bar { 
//   width: 10%;
//   height: 100%;
//   position: absolute;
// }`;

function openMenu() {
  $('#hamburger-menu').toggleClass("open");
  $('#nav-bar').toggleClass("open");
  $('#navigations').toggleClass("open");
}

$('.explore-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// $('.explore-carousel').slick({
//   centerMode: true,
//   centerPadding: '10px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });