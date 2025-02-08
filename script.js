//your JS code here. If required.
const div = document.querySelector(".div")
const cir1 = div.querySelectorAll(".circle")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
prevBtn.disabled = true
cir1[0].classList = "active"
let i = 0;
nextBtn.addEventListener("click",()=>{
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
})



