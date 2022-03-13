let menutoggle = document.querySelector('.burger');
let menu = document.querySelector('.nav');
menutoggle.onclick = function menuclick() {
	menutoggle.classList.toggle('active')
	menu.classList.toggle('active')
	circle.classList.toggle('active')
}