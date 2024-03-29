//dropdown menu
$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".dropdownList")
    .html(
      $(this).text() +
        ' <span class="caret pl-2"><img src="./img/icon/dropdown-icon.png" alt=""></span>'
    );
  $(this)
    .parents(".dropdown")
    .find(".dropdownList")
    .val($(this).data("value"));
});
//menu mobile
function openMenu() {
  var menu = document.getElementById("mySidenav");
  menu.classList.add("active");
}

function closeNav() {
  var menu = document.getElementById("mySidenav");
  menu.classList.remove("active");
}
//slick
$(document).ready(function($) {
  var gadgetCarousel = $(".sliders");

  gadgetCarousel.each(function() {
    if ($(this).is(".slick-film")) {
      $(this).slick({
        prevArrow: '<img class="left-arrow" src="./img/icon/back-session.png">',
        nextArrow:
          '<img class="right-arrow" src="./img/icon/next-session.png">',
        infinite: true,
        speed: 300,
        slidesPerRow: 4,
        rows: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesPerRow: 3,
              rows: 2,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesPerRow: 2,
              rows: 2,
              infinite: true,
              arrows: false,
              dot: false
            }
          }
        ]
      });
    } else if ($(this).is(".slick-soon")) {
      $(this).slick({
        prevArrow: '<img class="left-arrow" src="./img/icon/back-session.png">',
        nextArrow:
          '<img class="right-arrow" src="./img/icon/next-session.png">',
        infinite: true,
        speed: 300,
        slidesPerRow: 4,
        rows: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesPerRow: 3,
              rows: 2,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesPerRow: 2,
              rows: 2,
              infinite: true,
              arrows: false,
              dot: false
            }
          }
        ]
      });
    } else if ($(this).is(".slick-news")) {
      $(this).slick({
        prevArrow: '<img class="left-arrow" src="./img/icon/back-session.png">',
        nextArrow:
          '<img class="right-arrow" src="./img/icon/next-session.png">',
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 480,
            arrows: false
          }
        ]
      });
    } else {
      $(this).slick();
    }
  });
});
$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
  $(".slick-soon").slick("setPosition");
});
