$(function () {
  foodData();
  $("#hamburger-menu").click(openMenu);

  // EXPLORE PAGE OVERLAY
  $("#closeOverlay").click(closeOverlay);
})

function openMenu() {
  $('#hamburger-menu').toggleClass("open");
  $('#nav-bar').toggleClass("open");
  $('#navigations').toggleClass("open");
}

$('.explore-carousel').slick({
  centerMode: true,
  centerPadding: '40px',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  // slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

function closeOverlay() {
  $(".food-overlay").removeClass("appear");
  $(".explore-carousel").css("opacity", "1");
  $(".food-info").css("display", "none");
  $("#hamburger-menu").css("display", "block");
}

// global variable for json
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

      $(".explore-images").click(cssChanges);
      $(".explore-brotherbird").click(brotherbirdInfo);
      $(".explore-haakon").click(haakonInfo);

    })
    .fail(function () {
      console.log("error");
    });

}

// Repeated css changes
function cssChanges() {
  $(".explore-carousel").css("opacity", "0.5");
  $(".food-info").css("display", "flex");
  $("#hamburger-menu").css("display", "none");
  $(".food-overlay").addClass("appear");
}

// Brotherbird Coffeehouse
function brotherbirdInfo() {
  $(".food-overlay .main-image").css("background-image", "url(" + food[0].brotherbird.foodImage + ")");
  $(".overlay-title").html(food[0].brotherbird.shopName);
  $(".overlay-rating").append(food[0].brotherbird.foodRating);
  $(".overlay-ambience").append(food[0].brotherbird.ambienceRating);

  var pin = document.createElement("img");
  pin.src = "img/icons/pin.png";
  var src = document.getElementById("food-location");
  src.appendChild(pin);
  $(".overlay-location").append(food[0].brotherbird.shopLocation);

  $(".overlay-description").html(food[0].brotherbird.foodDescription);

  $("#thumbnail-1").attr("src", food[0].brotherbird.thumbnail1);
  $("#thumbnail-2").attr("src", food[0].brotherbird.thumbnail2);
  $("#thumbnail-3").attr("src", food[0].brotherbird.thumbnail3);
}

 function haakonInfo() {
  $(".food-overlay .main-image").css("background-image", "url(" + food[2].haakon.foodImage + ")");
  $(".overlay-title").html(food[2].haakon.shopName);
  $(".overlay-rating").append(food[2].haakon.foodRating);
  $(".overlay-ambience").append(food[2].haakon.ambienceRating);

  var pin = document.createElement("img");
  pin.src = "img/icons/pin.png";
  var src = document.getElementById("food-location");
  src.appendChild(pin);
  $(".overlay-location").append(food[2].haakon.shopLocation);

  $(".overlay-description").html(food[2].haakon.foodDescription);

  $("#thumbnail-1").attr("src", food[2].haakon.thumbnail1);
  $("#thumbnail-2").attr("src", food[2].haakon.thumbnail2);
  $("#thumbnail-3").attr("src", food[2].haakon.thumbnail3);
 }
