var btnTop = document.getElementById('top'),
	btnBottom = document.getElementById('bottom');
btnTop.addEventListener("click", posTop,false);
btnBottom.addEventListener("click", posBottom,false);

function posTop() {
	var navBar = document.querySelector('.bar'),
		btnTop = document.getElementById('top'),
		btnBottom = document.getElementById('bottom');
	navBar.classList.remove('pos-bottom')
	navBar.classList.add('pos-top');
	btnBottom.classList.remove('active')
	btnTop.classList.add('active');
	btnBottom.classList.add('in-active')
	btnTop.classList.remove('in-active');
};
function posBottom() {
	var navBar = document.querySelector('.bar'),
		btnTop = document.getElementById('top'),
		btnBottom = document.getElementById('bottom');
	navBar.classList.remove('pos-top');
	navBar.classList.add('pos-bottom');
	btnTop.classList.remove('active')
	btnBottom.classList.add('active');
	btnTop.classList.add('in-active')
	btnBottom.classList.remove('in-active');
};