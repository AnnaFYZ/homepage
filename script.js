const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var images;

// Describe this function...
function forward() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  images.push(images.shift());
}

// Describe this function...
function back() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  images.unshift(images.pop());
}


images = ['https://media.giphy.com/media/00xGP4zv8xENZ2tc3Y/giphy.gif', 
'https://media.giphy.com/media/KHF9fbygB3SRoWt3iC/giphy.gif', 
'https://media.giphy.com/media/ialSDndyZsksMRJWsb/giphy.gif', 
'images/pic1.jpg', 
'images/pic2.jpg', 
'images/pic3.jpg', 
'images/pic4.jpg', 
'images/kapci.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_img_blank = document.getElementById('img_blank');
  forward();
  element_img_blank.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img_blank2 = document.getElementById('img_blank');
  back();
  element_img_blank2.setAttribute("src", images.slice(-1)[0]);

});