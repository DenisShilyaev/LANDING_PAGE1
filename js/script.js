let item = document.querySelector('.touch-menu__item');
let buttonMenu = document.querySelector('.button-menu_hidden');

item.addEventListener('click', function () {
	this.classList.toggle('active-menu__item');
	buttonMenu.classList.toggle('button-menu');
});


