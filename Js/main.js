

$(".owl-one-corusel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 1.25,
    },
    540: {
      items: 1.5,
    },
    900: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1320: {
      items: 4,
    },
  },
});

$(".owl-two-corusel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    540: {
      items: 2,
    },
    1090: {
      items: 3,
    },
  },
});

$(".owl-carousel-instagram").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2.2,
    },
    1000: {
      items: 3.2,
    },
  },
});

const loading = document.getElementById("loading");

const loadingDuration = 4000;

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("header");

function shrink() {
  if (scrollY > 80) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });

  let backtop = document.getElementById("backtop");

  function toggleBacktop() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      backtop.classList.add("backtop-show");
    } else {
      backtop.classList.remove("backtop-show");
    }
  }
});


const toggleButton = document.getElementById("toggleButton");
const box = document.getElementById("addView");

toggleButton.addEventListener("click", () => {
  box.classList.toggle("news--body__active");
});


