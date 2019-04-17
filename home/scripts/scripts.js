console.log("Hello World!");


var elMainMenu = document.getElementById('menu');
var elHambBtn = document.querySelector('.hamburger');


elHambBtn.addEventListener('click', function(e) {
  elMainMenu.classList.toggle('close');
});
