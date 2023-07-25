var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var cssh1 = document.querySelector("h3");
var body = document.getElementById("gradient");
// console.log(color1);
// console.log(color2);
// console.log(cssh1);
function linearGradient(){
body.style.background = 
"linear-gradient(to right, "
+ color1.value
+ ", " 
+ color2.value 
+ ")";
}

color1.addEventListener("input", linearGradient);
color2.addEventListener("input",linearGradient);