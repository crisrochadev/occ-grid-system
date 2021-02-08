const links_menu = document.querySelectorAll('.menu .item_link')
const menu =  document.querySelector('.menu')
const sub_menu = document.querySelectorAll('.sub_menu')
const item_sub_menu = document.querySelectorAll('.item_sub_menu')
item_sub_menu.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.toggle('menu_show')
		menu_toggle.classList.toggle('menu_toggle_show')
	})
})
links_menu.forEach((link,i) => {
	link.addEventListener('click', () => {
		sub_menu[i].classList.toggle('sub_menu_show')
		link.classList.toggle('item_close')
	})
})
const menu_toggle = document.querySelector('.menu_toggle')
menu_toggle.addEventListener('click',() => {
	menu.classList.toggle('menu_show')
	menu_toggle.classList.toggle('menu_toggle_show')
})