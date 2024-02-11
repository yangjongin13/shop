let gds_item=document.createElement("li")
gds_item.classList.add("gds__item")
const gds_spawn=document.querySelector(".gds__list")
let gds_name=document.createElement("h1")
let gds_h1=document.createTextNode("подвески")
gds_name.appendChild(gds_h1)
let gds_picture=document.createElement("img")
gds_picture.src="https://avatars.mds.yandex.net/i?id=03eaf25761b36fc23f8d2fe701262529867568a1-9214528-images-thumbs&n=13"
let gds_removal=document.createElement("button")
let gds_btnt=document.createTextNode("удалить товар")
gds_removal.appendChild(gds_btnt)
gds_removal.setAttribute("onclick","del()")
let f1_item=document.querySelectorAll(".gds__item")[0]
function spawning(){
gds_spawn.appendChild(gds_item)
gds_item.appendChild(gds_name)
gds_item.appendChild(gds_picture)
gds_item.appendChild(gds_removal)
f1_item.classList.add("hide-f1")
}

function del(){
	gds_removal.parentNode.remove();
	f1_item.classList.remove("hide-f1")
}