$(function () {
  foodData();
  $("#hamburger-menu").click(openMenu);

  // EXPLORE PAGE OVERLAY
  $("#closeOverlay").click(closeOverlay);
  // $(".explore-brotherbird").click(showFood1);
  // $("#thumbnail-1").hover(changeImage);

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

var food;

function foodData() {
  $.ajax({
    type: "GET",
    url: "./js/food.json",
    dataType: "json",
  })

    .done(function (json) {
      //TYPE ALL THE CODES IN HERE
      food = json;

      console.log(food[0].brotherbird.shopName);
      $(".explore-brotherbird").click(brotherbirdInfo);

    })
    .fail(function () {
      console.log("error");
    });

}

// Brotherbird Coffeehouse
function brotherbirdInfo() {
  $(".explore-carousel").css("opacity", "0.5");
  $(".food-overlay").addClass("appear");

  $(".food-overlay .main-image").css("background-image", "url(" + food[0].brotherbird.foodImage + ")");
  $(".overlay-title").html(food[0].brotherbird.shopName);
  // $(".overlay-type").html(brotherbird.foodType);

  var pin = document.createElement("img");
  pin.src = "img/icons/pin.png";
  var src = document.getElementById("food-location");
  src.appendChild(pin);
  $(".overlay-location").append(food[0].brotherbird.shopLocation);
  // $(".overlay-location").html(brotherbird.foodLocation);

  $(".overlay-description").html(food[0].brotherbird.foodDescription);

  $("#thumbnail-1").attr("src", food[0].brotherbird.thumbnail1);
  $("#thumbnail-2").attr("src", food[0].brotherbird.thumbnail2);
  $("#thumbnail-3").attr("src", food[0].brotherbird.thumbnail3);
}

// function changeImage() {
//   $(".food-overlay .main-image").css("background-image", "url(" + brotherbird.thumbnail1 + ")");
// }