//your JS code here. If required.
const div = document.querySelector(".div")
const cir1 = div.querySelectorAll(".circle")
// const cir2 = div.querySelector("#circle-1")
// const cir3 = div.querySelector("#circle-2")
// const cir4 = div.querySelector("#circle-3")
// const cir5 = div.querySelector("#circle-4")
// const cir6 = div.querySelector("#circle-5")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const line = document.querySelectorAll(".line1")
prevBtn.disabled = true
cir1[0].className = "active"
let i = 0;
nextBtn.addEventListener("click",()=>{
	line[i].classList = "line"
	i++
	cir1[i].classList = "active"
	prevBtn.disabled = false
	if(i==4){
		nextBtn.disabled = true
	} 
})
prevBtn.addEventListener("click",()=>{
	cir1[i].classList = "circle"
	nextBtn.disabled = false
	if(i==1){
		prevBtn.disabled = true
	}
	i--
	line[i].classList = "line1"
})



