var btnTop = document.getElementById('top'),
	btnBottom = document.getElementById('bottom');
btnTop.addEventListener("click", posTop,false);
btnBottom.addEventListener("click", posBottom,false);

function posTop() {
	var navBar = document.querySelector('.bar');
	navBar.classList.remove('pos-bottom')
	navBar.classList.add('pos-top');
};
function posBottom() {
	var navBar = document.querySelector('.bar');
	navBar.classList.remove('pos-top');
	navBar.classList.add('pos-bottom');

};