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
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
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

      $(".explore-brotherbird").click(brotherbirdInfo);

    })
    .fail(function () {
      console.log("error");
    });

}

// Brotherbird Coffeehouse
function brotherbirdInfo() {
  $("footer").css("display", "none");
  $(".explore-carousel").css("opacity", "0.5");
  $(".food-overlay").addClass("appear");

  $(".food-overlay .main-image").css("background-image", "url(" + food[0].brotherbird.foodImage + ")");
  $(".overlay-title").html(food[0].brotherbird.shopName);

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
