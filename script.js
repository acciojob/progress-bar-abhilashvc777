//your JS code here. If required.
const div = document.querySelector(".div")
const cir1 = document.querySelectorAll(".circle")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const line = document.querySelectorAll(".line1")
prevBtn.disabled = true
cir1[0].className = "active"
let i = 0;
nextBtn.addEventListener("click",()=>{
	line[i].className = "line"
	i++
	cir1[i].className = "active"
	prevBtn.disabled = false
	if(i==4){
		nextBtn.disabled = true
	} 
})
prevBtn.addEventListener("click",()=>{
	cir1[i].className = "circle"
	nextBtn.disabled = false
	if(i==1){
		prevBtn.disabled = true
	}
	i--
	line[i].className = "line1"
})



