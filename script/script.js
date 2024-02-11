let buyf = false;

function buy() {
	if(!buyf){
			document.getElementById("btn1").style.background = "lime"
			document.getElementById("btn1").innerHTML = "в корзине"
			buyf=true
	} else{
		document.getElementById("btn1").style.background = "Silver"
		document.getElementById("btn1").innerHTML = "купить"
		buyf=false	
	}
}