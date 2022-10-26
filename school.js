const hamburgerMenu = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active")
  menu.classList.toggle("active")
})

const link = document.querySelectorAll(".nav-link")

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    menu.classList.remove("active")
  })
}

const btn = document.querySelector(".contactBtn")

btn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active")
  menu.classList.remove("active")
})

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 2000,
  },
  parallax: true,
 allowPrevSlides:true,
 allowNextSlides:true,
 loop:true,
 centeredSlidesBounds: true,
 slidesPerView:1,
 spaceBetween:70,
 
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
})