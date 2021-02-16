$(function () {
  var owl = $(".owl-carousel");
    const prevBtn = '<img src="img/prev.png" />';
    const nextBtn = '<img src="img/next .png"/>';
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    navText: [prevBtn, nextBtn],
  });

});
  
$(".owl-second").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  items:4,
  responsive: {
    0: {
      items: 1.3,
    },
    558: {
      items:1.5,
    },
    1300: {
      items: 4,
    }
  }
});

$(".owl-third").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  items: 4,
  margin:30,
  responsive: {
    0: {
      items: 2,
    },
    558: {
      items: 2.5,
    },
    900: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});

$(".owl-last").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  items: 4,
  margin: 30,
  responsive: {
    0: {
      items: 2,
    },
    558: {
      items: 2.5,
    },
    900: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});
    
  
  let _burgerClose = document.querySelector(".burger_close");
  let _headerBurger = document.querySelector(".header_burger");
  let _body = document.querySelector("body");
  let _linksImage = document.querySelector("._open");

_linksImage.addEventListener('click', (e) => {
  e.preventDefault();
  _headerBurger.classList.toggle("_active");
  _body.classList.toggle("lock");
  console.log("_active_working");
});
    
  

_burgerClose.addEventListener('click', (e) => {
  e.preventDefault();
  _headerBurger.classList.remove("_active");
  _body.classList.toggle("lock");
  _headerBurger.style.transition = "1s";
  console.log("close");
});
