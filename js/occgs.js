/* --- Variaveis --- */
const html = document.querySelector('html')
const body = document.querySelector('body')
const head = document.querySelector('head')


 function addStylesheet(font1,font2,font3) { 
 	let fonts = [font1,font2,font3]
 	let head = document.head
 	
	fonts.forEach(font => {
		if(font && font != undefined){
			head.insertAdjacentHTML('afterBegin',`<link href="${font}" rel="stylesheet">`)
		}
	})    
	  
    } 

const getFontFamily = (font) =>{
		let arrayFont = font.split('=')
		let fontFamily = ''
		if(arrayFont[1].includes(':')){
			fontFamily = arrayFont[1].split(':')
		}else{
			fontFamily = arrayFont[1].split('&')
		}

		return fontFamily[0]
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "$1").toLowerCase()
const changeRoot = (root) =>{
	Object.keys(root).map(key =>{
		html.style.setProperty(transformKey(key),root[key])
	})
}


const occgridsystem = (set) =>{
	function getStyle(element,style){
		return window.getComputedStyle(element).getPropertyValue(style)
	}
	const configRoot = {
		darkMode: set && set.configRoot != undefined ? set.configRoot.darkMode : false,
	}

	const linkFont = `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap`
		const initalRoot = {
			primaryColor: 
			set && set.rootStyles.primaryColor != undefined ?		
			set.rootStyles.primaryColor :
			window.getComputedStyle(html).getPropertyValue('--primarycolor'),
			secondaryColor: 	
			set && set.rootStyles.secondaryColor != undefined ?		
			set.rootStyles.secondaryColor :
			getStyle(html,'--secondarycolor'),
			mainColor: 			
			set && set.rootStyles.mainColor != undefined ?		
			set.rootStyles.mainColor :
			getStyle(html,'--maincolor'),
			borderColor: 		
			set && set.rootStyles.boderColor != undefined ?		
			set.rootStyles.boderColor :
			getStyle(html,'--bodercolor'),
			boxShadowColor: 	
			set && set.rootStyles.boxShadowColor != undefined ?		
			set.rootStyles.boxShadowColor :
			getStyle(html,'--boxshadowcolor'),
			bgDarkColor: 		
			set && set.rootStyles.bgDarkColor != undefined ?		
			set.rootStyles.bgDarkColor :
			getStyle(html,'--bgdarkcolor'),
			bgLightColor: 		
			set && set.rootStyles.bgLightColor != undefined ?		
			set.rootStyles.bgLightColor :
			getStyle(html,'--bglightcolor'),
			textColor: 			
			set && set.rootStyles.textColor != undefined ?		
			set.rootStyles.textColor :
			getStyle(html,'--textcolor'),
			h1Color:  			
			set && set.rootStyles.h1Color != undefined ?		
			set.rootStyles.h1Color :
			getStyle(html,'--h1color'),
			h2Color: 			
			set && set.rootStyles.h2Color != undefined ?		
			set.rootStyles.h2Color :
			getStyle(html,'--h2color'),
			h3Color: 			
			set && set.rootStyles.h3Color != undefined ?		
			set.rootStyles.h3Color :
			getStyle(html,'--h3color'),
			h4Color: 			
			set && set.rootStyles.h4Color != undefined ?		
			set.rootStyles.h4Color :
			getStyle(html,'--h4color'),
			h5Color: 			
			set && set.rootStyles.h5Color != undefined ?		
			set.rootStyles.h5Color :
			getStyle(html,'--h5color'),
			h6Color: 			
			set && set.rootStyles.h6Color != undefined ?		
			set.rootStyles.h6Color :
			getStyle(html,'--h6color'),
			alertColor: 			
			set && set.rootStyles.alertColor != undefined ?		
			set.rootStyles.alertColor :
			getStyle(html,'--alertcolor'),
			dangerColor: 			
			set && set.rootStyles.dangerColor != undefined ?		
			set.rootStyles.dangerColor :
			getStyle(html,'--dangercolor'),
			successColor: 			
			set && set.rootStyles.successColor != undefined ?		
			set.rootStyles.successColor :
			getStyle(html,'--successcolor'),
			fontTextSize: 		
			set && set.rootStyles.fontTextSize != undefined ?		
			set.rootStyles.fontTextSize :
			getStyle(html,'--fonttextsize'),
			fontH1Size: 		
			set && set.rootStyles.fontH1Size != undefined ?		
			set.rootStyles.fontH1Size :
			getStyle(html,'--fonth1size'),
			fontH2Size: 		
			set && set.rootStyles.fontH2Size != undefined ?		
			set.rootStyles.fontH2Size :
			getStyle(html,'--fonth2size'),
			fontH3Size: 		
			set && set.rootStyles.fontH3Size != undefined ?		
			set.rootStyles.fontH3Size :
			getStyle(html,'--fonth3size'),
			fontH4Size: 		
			set && set.rootStyles.fontH4Size != undefined ?		
			set.rootStyles.fontH4Size :
			getStyle(html,'--fonth4size'),
			fontH5Size: 		
			set && set.rootStyles.fontH5Size != undefined ?		
			set.rootStyles.fontH5Size :
			getStyle(html,'--fonth5size'),
			fontH6Size: 		
			set && set.rootStyles.fontH6Size != undefined ?		
			set.rootStyles.fontH6Size :
			getStyle(html,'--fonth6size'),
			linkMainFont: 			
			set && set.rootStyles.linkMainFont != undefined ?		
			set.rootStyles.linkMainFont :
			linkFont,
			linkSecondaryFont: 			
			set && set.rootStyles.linkSecondaryFont != undefined ?		
			set.rootStyles.linkSecondaryFont :
			linkFont,
			linkPrimaryFont: 			
			set && set.rootStyles.linkPrimaryFont != undefined ?		
			set.rootStyles.linkPrimaryFont :
			linkFont,
			primaryFont: 		
			set && set.rootStyles.linkPrimaryFont != undefined ?		
			getFontFamily(set.rootStyles.linkPrimaryFont):
			getStyle(html,'--primaryfont'),
			secondaryFont:  	
			set && set.rootStyles.linkSecondaryFont != undefined ?		
			getFontFamily(set.rootStyles.linkSecondaryFont) :
			getStyle(html,'--secondaryfont'),
			mainFont: 			
			set && set.rootStyles.linkMainFont != undefined ?		
			getFontFamily(set.rootStyles.linkMainFont):
			getStyle(html,'--mainfont'),
		}

		body.style.background = configRoot.darkMode ? initalRoot.bgDarkColor : initalRoot.bgLightColor

		changeRoot(initalRoot)

		addStylesheet(initalRoot.linkPrimaryFont,initalRoot.linkSecondaryFont,initalRoot.linkMainFont)
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
const nav_1 = document.querySelector('.occ-navbar-1')
if(nav_1 && nav_1 != undefined){
	const with_children = document.querySelectorAll('.occ-navbar-1 .with-children');
	const sub_menu = document.querySelectorAll('.occ-navbar-1 .sub-menu');
	with_children.forEach((chil,i) => {
		chil.addEventListener('click',() => {
			sub_menu[i].classList.toggle('sub-menu-show')
			chil.style.height = 'auto';
		})
	})
	const menu_toggle = document.querySelector('.menu-toggle-1')
	const menu = document.querySelector('.navbar-reponsive .menu')
	menu_toggle.addEventListener('click', () => {
		menu.classList.toggle('menu-show')
		menu_toggle.classList.toggle('menu-toggle-1-close')
	})
	const search_toggle = document.querySelector(' .search-toggle')
	if(search_toggle && search_toggle != undefined){
		const search = document.querySelector('.search-1 .search')
		search_toggle.addEventListener('click', () => {
			search.classList.toggle('search-show')
			search_toggle.classList.toggle('search-toggle-1-close')
		})
	}
	

	// Menu Active
	const currentLocation = location.href
	const menuItem = document.querySelectorAll('.occ-navbar-1 .menu li')
	const menuLink = document.querySelectorAll('.occ-navbar-1 .menu li a')
		for(let i=0;i<menuLink.length;i++){
			if(menuLink[i].href === currentLocation){
						menuLink[i].className = 'active'
			}
		}

}