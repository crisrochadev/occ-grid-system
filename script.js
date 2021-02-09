/* --- Variaveis --- */
const html = document.querySelector('html')
const body = document.querySelector('body')

const getStyle = (element,style) => {
	window.getComputedStyle(element).getPropertyValue(style)
}
const transformKey = key => "--" + key.replace(/([A-Z])/, "$1").toLowerCase()
const changeRoot = (root) =>{
	Object.keys(root).map(key =>{
		html.style.setProperty(transformKey(key),root[key])
	})
}

const occgridsystem = (set) =>{
	const configRoot = {
		darkMode: set && set.configRoot != undefined ? set.configRoot.darkMode : true,
	}
	if( set && set.rootStyles != undefined ){
		const initalRoot = {
			primaryColor: 		set.rootStyles.primaryColor,
			secondaryColor: 	set.rootStyles.secondaryColor,
			mainColor: 			set.rootStyles.mainColor,
			borderColor: 		set.rootStyles.borderColor,
			boxShadowColor: 	set.rootStyles.boxShadowColor,
			bgDarkColor: 		set.rootStyles.bgDarkColor,
			bgLightColor: 		set.rootStyles.bgLightColor,
			textColor: 			set.rootStyles.textColor,
			h1Color:  			set.rootStyles.h1Color,
			h2Color: 			set.rootStyles.h2Color,
			h3Color: 			set.rootStyles.h3Color,
			h4Color: 			set.rootStyles.h4Color,
			h5Color: 			set.rootStyles.h5Color,
			h6Color: 			set.rootStyles.h6Color,
			fontTextSize: 		set.rootStyles.fontTextSize,
			fontH1Size: 		set.rootStyles.fontH1Size,
			fontH2Size: 		set.rootStyles.fontH2Size,
			fontH3Size: 		set.rootStyles.fontH3Size,
			fontH4Size: 		set.rootStyles.fontH4Size,
			fontH5Size: 		set.rootStyles.fontH5Size,
			fontH6Size: 		set.rootStyles.fontH6Size,
			primaryFont: 		set.rootStyles.primaryFont,
			secondaryFont:  	set.rootStyles.secondaryFontset ,
			mainFont: 			set.rootStyles.mainFont,
			primaryFont:'',
			secondaryFont:'',
		}
		body.style.background = configRoot.darkMode ? initalRoot.bgDarkColor : initalRoot.bgLightColor
		changeRoot(initalRoot)
	}
}

/* ------------ Data Values ---------------- */
const data_bg = document.querySelectorAll('[data-bg]')
data_bg.forEach(data => {
	let bgColor = data.getAttribute('data-bg')
	data.style.background = bgColor
})
const data_color = document.querySelectorAll('[data-color]')
data_color.forEach(data => {
	let color = data.getAttribute('data-color')
	data.style.color = color
})

/* Menus Navbar */
// menu-nav-1 toggle-1
const menu_nav_1 = document.querySelector('.menu-nav-1')
const toggle_1 = document.querySelector('.toggle-1')
const menu_direction = document.querySelector('.menu-nav-1').classList
toggle_1.addEventListener('click', () => {
	toggle_1.classList.toggle('toggle-1-show')
	menu_nav_1.classList.toggle('menu-nav-1-show')
})
if(menu_direction.value.includes('nav-right')){
	document.querySelector('.nav-1 .menu').style.order = 2
	document.querySelector('.nav-1 .brand').style.order = 1
	document.querySelector('.nav-1').style.justifyContent = 'flex-end'
}


