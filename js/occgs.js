/* --- Variaveis --- */
const html = document.querySelector('html')
const body = document.querySelector('body')
const head = document.querySelector('head')


 function addStylesheet(font1,font2,font3) { 
 	let linkToAdd = []
 	let linkToAdd2 = []
 	let fonts = [font1,font2,font3]
 	let font = []
 	 for(let i=0;i<3;i++){
 	 		  if(fonts[i].includes(' ')){
 	 		  	let fontMod = fonts[i].replace(" ", "+")
 	 		  	font.push(fontMod.replace(/^"|"$/g, ''))
 	 		  }else{
 	 		  	font.push(fonts[i])
 	 		  }
		      linkToAdd.push(document.createElement('link')); 
		      linkToAdd[i].href =  'https://fonts.gstatic.com'; 
		      linkToAdd[i].rel = 'preconnect'; 
		      document.head.appendChild(linkToAdd[i]); 
		      linkToAdd2.push(document.createElement('link'));
		      linkToAdd2[i].href =  `https://fonts.googleapis.com/css2?family=${font[i]}&display=swap`;
		      linkToAdd2[i].rel = 'stylesheet'; 
		      document.head.appendChild(linkToAdd2[i]);
      } 
  
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
			primaryFont: 		
			set && set.rootStyles.primaryFont != undefined ?		
			set.rootStyles.primaryFont :
			getStyle(html,'--primaryfont'),
			secondaryFont:  	
			set && set.rootStyles.secondaryFont != undefined ?		
			set.rootStyles.secondaryFont :
			getStyle(html,'--secondaryfont'),
			mainFont: 			
			set && set.rootStyles.mainFont != undefined ?		
			set.rootStyles.mainFont :
			getStyle(html,'--mainfont'),
		}

		body.style.background = configRoot.darkMode ? initalRoot.bgDarkColor : initalRoot.bgLightColor

		changeRoot(initalRoot)

		addStylesheet(initalRoot.primaryFont,initalRoot.secondaryFont,initalRoot.mainFont)
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


