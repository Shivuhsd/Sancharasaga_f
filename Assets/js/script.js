// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".navbar-m");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// slider-1
const initSlider = () => {
  const sliders = document.querySelectorAll(".slider-div");

  sliders.forEach((slider) => {
    const imageList = slider.querySelector(".slider-wrapper .image-list");
    const slideButtons = slider.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = slider.querySelector(".right-slider .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // ... (Rest of the code remains unchanged)

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

//  var slide = document.getElementsByClassName("slide");
//         var indicator = document.getElementById("indicator");
//         var dots = document.getElementsByClassName("dots");
//         var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
//         var l = slide.length;
//         var interval = 5000;
//         var set;

//         window.onload = function () {
//             initialize();
//             slide[0].style.opacity = "1";
//             for (var j = 0; j < l; j++) {
//                 indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
//             }

//             dots[0].style.background = "#696969";

//         }

//         function initialize() {
//             if (autoplay === "true")
//                 set = setInterval(function () { next(); }, interval);
//         }



//         function change(index) {
//             clearInterval(set);
//             count = index;
//             for (var j = 0; j < l; j++) {
//                 slide[j].style.opacity = "0";
//                 dots[j].style.background = "#bdbdbd";
//             }
//             slide[count].style.opacity = "1";
//             dots[count].style.background = "#696969";


//         }

//         var count = 0;
//         function next() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             count++;
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }


//             if (count == l) {
//                 count = 0;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }


//         function prev() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }
//             count--;

//             if (count == -1) {
//                 count = l - 1;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }

//         // viwe more
//         function toggleView() {
//             const additionalLiElements = document.querySelectorAll('.desc-details .hidden');
//             const viewMoreBtn = document.getElementById('viewMoreBtn');

//             additionalLiElements.forEach(li => {
//                 li.style.display = (li.style.display === 'none' || li.style.display === '') ? 'block' : 'none';
//             });

//             // Toggle button text
//             const isHidden = additionalLiElements[0].style.display === 'none';
//             viewMoreBtn.innerText = isHidden ? 'View More' : 'View Less';
//         }


gsap.from(
  ".main-text h1, .main-text span, .main-text p",
  {
    y: -50,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrub: 5,
  }
);

