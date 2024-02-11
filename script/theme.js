const header = document.querySelector("header")
const footer = document.querySelector("footer")
const body = document.querySelector("body")
const capybara = document.querySelectorAll(".menu_link")

function choiseDark(){
	console.log("dark")
	body.style.background = "black";
	body.style.transition = "1s ease-out 0.5s"
	header.style.background = "#1f1f1f" 
	header.style.transition = "1s ease-out 0.5s"
	capybara.forEach((element) =>{
		element.style.color = "white"
		element.style.transition = "1s ease-out 0.5s"
	})
}

function choiseWhite(){
	console.log("white")
	body.style.background = "white"	
	header.style.background = "#f1f1f1"
	capybara.forEach((element) =>{
		element.style.color = "black"
	})
}