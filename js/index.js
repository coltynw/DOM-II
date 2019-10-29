// Your code goes here



const busImage = document.querySelector("img");
// mouseover 1
    busImage.addEventListener("mouseover", () => {
    busImage.style.transform = "scale(1.2)";
    busImage.style.transition = "all 0.3s"
  })

// mouseout 2
  busImage.addEventListener("mouseout", () => {
    busImage.style.transform ="scale(1)";
    busImage.style.transition = "all 0.3s"
 })
// click 3
  document.querySelectorAll("p").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color="blue"
    })
  })


  // dblclick 4
  document.querySelectorAll("p").forEach(el => {
    el.addEventListener("dblclick", () => {
      el.style.color="darkblue"
    })
  })

// stop propogation 
const body = document.querySelector("body");
// mousedown 5
body.addEventListener("mousedown", (event) => {
 body.style.backgroundColor="white";
  event.stopPropagation();
})
 // mouseleave 6
const red = document.querySelector("body");
red.addEventListener('mouseleave', (event) => {
  red.style.backgroundColor="red";
  event.stopPropagation();
});
// mouseenter 7
const yellow = document.querySelector("body");
yellow.addEventListener('mouseenter', (event) => {
  yellow.style.backgroundColor="yellow";
  event.stopPropagation();
})
// wheel 8
const black = document.querySelector("body");
black.addEventListener('wheel', (event) => {
  black.style.backgroundColor="black";
  event.stopPropagation();
})


// resize 9
const newH1 = document.querySelector('.intro h2');
window.addEventListener("resize", () => {
   newH1.style.backgroundColor="yellow";
})

// copy 10
window.addEventListener("copy", () => {
    newH1.style.backgroundColor="red";
 })


// prevent default action makes nav bar not work

document.getElementsByClassName("nav").addEventListener("click", function(event){
    event.preventDefault()
  });