// JavaScript Document
console.log("hi");

// const ButtonNieuws = document.querySelector("nav button:nth-of-type(1)");

// ButtonNieuws.addEventListener("onclick", menuLatenZien);

// ButtonNieuws.onclick = menuLatenZien
// function menuLatenZien(){ 

    
//     dropdown.style.top = '4em';
//     dropdown.style.left = '6em';
//     console.log("sws")
// }

// const dropdown = document.getElementById('nav ul:nth-of-type(3)'); 


// dropdown.classList.add("[DropdownActive]")




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



const lijst2 = document.querySelector("nav ul:nth-of-type(4)");
const sportButton = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(3) button:nth-of-type(1)");

nieuwsButton.onclick = laatMenuZien2;

function laatMenuZien2 (){
//   class toevoegen aan lijstje (toggle is aan en uit met klik, anders kan je add gebruiken)
  lijst2.classList.toggle("lijstLatenZien");
}