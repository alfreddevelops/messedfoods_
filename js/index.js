$(function () {
  $("#hamburger-menu").click(openMenu);

  // EXPLORE PAGE OVERLAY
  $("#closeOverlay").click(closeOverlay);
  $(".explore-brotherbird").click(showFood1);
  $("#thumbnail-1").hover(changeImage);

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

// $('.explore-carousel').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4
// });

$('.explore-carousel').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

function closeOverlay() {
  $(".food-overlay").removeClass("appear");
  $(".explore-carousel").css("opacity", "1");
}

// import food from './food.json';
// console.log(food, 'here in index');

function showFood1() {
  // info of location
  var brotherbird = {
    foodImage: "img/brotherbird/mochi-donut.jpg",
    foodTitle: "Brotherbird Coffeehouse",
    foodType: "Shophouse Cafe",
    foodLocation: "32 Bali Ln, Singapore 189868",
    foodDescription: "Brotherbird Coffeehouse serves a huge variety of croissants. And not just that, they also serve pasta and other desserts.",

    thumbnail1: "img/brotherbird/drinks.jpg",
    thumbnail2: "img/brotherbird/spaghetti-carbonara.jpg",
    thumbnail3: "img/brotherbird/croissant.jpg",
    // thumbnail4: "images/works/cross-roads/hand.jpg",
  };

  $(".explore-carousel").css("opacity", "0.5");
  $(".food-overlay").addClass("appear");

  $(".food-overlay .main-image").css("background-image", "url(" + brotherbird.foodImage + ")");
  $(".overlay-title").html(brotherbird.foodTitle);
  // $(".overlay-type").html(brotherbird.foodType);

  var pin = document.createElement("img");
  pin.src = "img/icons/pin.png";
  var src = document.getElementById("food-location");
  src.appendChild(pin);
  $(".overlay-location").append(brotherbird.foodLocation);
  // $(".overlay-location").html(brotherbird.foodLocation);

  $(".overlay-description").html(brotherbird.foodDescription);

  $("#thumbnail-1").attr("src", brotherbird.thumbnail1);
  $("#thumbnail-2").attr("src", brotherbird.thumbnail2);
  $("#thumbnail-3").attr("src", brotherbird.thumbnail3);
}

function changeImage() {
  $(".food-overlay .main-image").css("background-image", "url(" + brotherbird.thumbnail1 + ")");
}