// JavaScript Document
console.log("hi");

let hamburgerButton = document.querySelector("header button");
let nav = document.querySelector("header nav");

hamburgerButton.addEventListener("click", toggleButton);

function toggleButton (){
  hamburgerButton.classList.toggle("is-open")

  nav.classList.toggle("is-visible");
}

const isExpanded = hamburgerButton.classList.contains("is-open");
hamburgerButton.setAttribute("aria-expanded", isExpanded);