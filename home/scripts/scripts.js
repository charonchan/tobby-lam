console.log('Hello World!');
var elMenuBtn = document.getElementById('menu');
var elMainMenu = document.querySelector('nav-list');

elMenuBtn.addEventListener('click', function(e){
  elMainMenu.classList.toggle('open');
});
