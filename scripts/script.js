// JavaScript Document
console.log("hi");


// CODE VAN NIENKE

// elementen uit je document selecteren
const lijstje = document.querySelector("nav ul:nth-of-type(3)");
const nieuwsButton = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(2) button:nth-of-type(1)");

// als je klikt moet hij iets doen 
nieuwsButton.onclick = laatMenuZien;

function laatMenuZien (){
//   class toevoegen aan lijstje (toggle is aan en uit met klik, anders kan je add gebruiken)
  lijstje.classList.toggle("lijstjeLatenZien");
}




// Deze code en die daaronder zelf aangepast aan de hand van Nienke haar voorbeeld
const lijst2 = document.querySelector("nav ul:nth-of-type(4)");
const sportButton = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(3) button:nth-of-type(1)");

sportButton.onclick = laatMenuZien2;

function laatMenuZien2 (){

  lijst2.classList.toggle("lijstLatenZien");
}


const lijst3 = document.querySelector("nav ul:nth-of-type(5)");
const SvgButton = document.querySelector("nav ul:nth-of-type(2) li:nth-of-type(2) button:nth-of-type(1)");

SvgButton.onclick = laatMenuZien3;

function laatMenuZien3 (){

  lijst3.classList.toggle("lijstLatenZien3");
}