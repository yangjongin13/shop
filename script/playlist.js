const video =document.getElementById("Ultrakill")
let playlist=["cat", "lime"]
let num=0 
function next() {
	if (num < playlist.length-1){
		num=num+1
	} else {
		num=0
	}
	
console.log(num)
video.src=`video/${playlist[num]}.mp4`
}
function mute(){
	if (video.muted) {
		video.muted=false
	} else {
		video.muted=true
	}
} 
function prev () {
	num=num-1
	console.log(num)
	video.src=`video/${playlist[num]}.mp4`
}