// JavaScript Document
console.log("hi");


//*******************************************//
// Openen en sluiten van hamburger en search //
//*******************************************//

let hamburgerButton = document.querySelector("header > button:nth-child(2)"); 
let nav = document.querySelector("header nav"); 

let searchButton = document.querySelector("header > button:nth-child(3)"); 
let search = document.querySelector("header search");

let body = document.querySelector("body");

hamburgerButton.addEventListener("click", toggleButton); 

function toggleButton () {
    let searchIsOpen = searchButton.classList.contains("is-open")

    if (searchIsOpen) {
        search.classList.remove("is-visible");
        searchButton.classList.remove("is-open");
        searchButton.setAttribute("aria-expanded", false);
        search.setAttribute("inert", "");
    }

    hamburgerButton.classList.toggle("is-open"); 
    nav.classList.toggle("is-visible");

    let hamburgerIsExpanded = hamburgerButton.classList.contains("is-open"); 
    hamburgerButton.setAttribute("aria-expanded", hamburgerIsExpanded); 

    if (hamburgerIsExpanded) {
        nav.removeAttribute("inert");
    } else {
        nav.setAttribute("inert", "");
    }
    // Bron: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert#accessibility_concerns
} 

searchButton.addEventListener("click", toggleSearch); 

function toggleSearch (){ 
    let hamburgerIsOpen = hamburgerButton.classList.contains("is-open")

    if (hamburgerIsOpen) {
        nav.classList.remove("is-visible");
        hamburgerButton.classList.remove("is-open");
        hamburgerButton.setAttribute("aria-expanded", false);
        nav.setAttribute("inert", "");
    }


    searchButton.classList.toggle("is-open");
    search.classList.toggle("is-visible");

    let searchIsExpanded = searchButton.classList.contains("is-open"); 
    searchButton.setAttribute("aria-expanded", searchIsExpanded); 

    if (searchIsExpanded) {
        search.removeAttribute("inert");
    } else {                                                                    
        search.setAttribute("inert", "");
    }
}

//*************************//
// Video starten en stoppen//
//*************************//

let deVideo = document.querySelector("video");
let playButton = document.querySelector("main section:nth-of-type(1) button");
let pauseButton = document.querySelector("main section:nth-of-type(1) button:nth-last-of-type(1)");

playButton.addEventListener ("click", toggleVideo);
pauseButton.addEventListener ("click", toggleVideo);

function toggleVideo() {
    if (deVideo.paused) {
        deVideo.play();
        playButton.classList.add("visually-hidden");
        pauseButton.classList.remove("visually-hidden");
    } else {
        deVideo.pause();
        playButton.classList.remove("visually-hidden");
        pauseButton.classList.add("visually-hidden");
    }
}
