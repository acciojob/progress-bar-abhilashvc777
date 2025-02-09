//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress-line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
 
let currentActive = 1;
 
// Update Progress Bar
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
 
    const activeCircles = document.querySelectorAll('.active');
    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';
 
    // Manage button states
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}
 
// Next Button Click
next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;https://www.svgrepo.com/show/345221/three-dots.svg
        updateProgress();
    }
});
 
// Previous Button Click
prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        updateProgress();
    }
});
 
// Initial state
updateProgress();
// const div = document.querySelector(".div")
// const cir1 = document.querySelectorAll(".circle")
// const prevBtn = document.querySelector("#prev")
// const nextBtn = document.querySelector("#next")
// const line = document.querySelectorAll(".line1")
// prevBtn.disabled = true
// cir1[0].className = "active"
// let i = 0
// nextBtn.addEventListener("click",()=>{
// 	line[i].className = "line"
// 	i++
// 	cir1[i].className = "active"
// 	prevBtn.disabled = false
// 	if(i==4){
// 		nextBtn.disabled = true
// 	} 
// })
// prevBtn.addEventListener("click",()=>{
// 	cir1[i].className = "circle"
// 	nextBtn.disabled = false
// 	if(i==1){
// 		prevBtn.disabled = true
// 	}
// 	i--
// 	line[i].className = "line1"
// })
// nextBtn.addEventListener("click",()=>{
//     line[i].classList.add("line");
//     i++
//     cir1[i].classList.add("active");
//     prevBtn.disabled = false;
//     if(i==4){
//         nextBtn.disabled = true;
//     } 
// })

// prevBtn.addEventListener("click",()=>{
//     cir1[i].classList.remove("active");
//     nextBtn.disabled = false;
//     if(i==1){
//         prevBtn.disabled = true;
//     }
//     i--
//     line[i].classList.remove("line");
// })



