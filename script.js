AOS.init({
    duration: 1000,
});

// SMOOTH SCROLL FROM NAV
const links = document.querySelectorAll(".nav-list li a");

for(link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// SMOOTH SCROLL FROM BOTTOM
const bottomLinks = document.querySelectorAll(".links li a");

for(link of bottomLinks) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

// SCROLL TO TOP
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Type Writing Effect
const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

const wordArray = ["Web Developer", "Product Designer", "Tech Advocate", "Computer Scientist"];

let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 100;
const erasingDelay = 50;
const newWordDelay = 2000;

// Typing Function
function type() {
  if(letterIndex < wordArray[wordArrayIndex].length) {

      if(!cursor.classList.contains("typing")) {
          cursor.classList.add("typing");
      }

      typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(type, typingDelay);
  } else {
      cursor.classList.remove("typing");
      setTimeout(erase, newWordDelay);
  }
}

// Erase Function
function erase() {
  if(letterIndex > 0) {
      if(!cursor.classList.contains("typing")) {
          cursor.classList.add("typing");
      }
      typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex-1);
      letterIndex--;
      setTimeout(erase, erasingDelay);
  } else {
      cursor.classList.remove("typing");
      wordArrayIndex++;
      if(wordArrayIndex >= wordArray.length) {
          wordArrayIndex = 0;
      }
      setTimeout(type, typingDelay);
  }
}



document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});

