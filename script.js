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


images = ['pic1.jpg', 
'pic2.jpg', 
'pic3.jpg', 
'pic5.jpg', 
'kapci.jpg'];


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
