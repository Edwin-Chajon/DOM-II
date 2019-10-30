// Your code goes here
//Mouse Over
const bodyImageOne = document.querySelector(".img-content");
console.log(bodyImageOne);

bodyImageOne.addEventListener("mouseenter", () => {
    bodyImageOne.style.transform = "scale(1.2)";
    bodyImageOne.style.transition = "all 0.3s"
})
bodyImageOne.addEventListener("mouseleave", () => {
    bodyImageOne.style.transform = "scale(1.0)";
    bodyImageOne.style.transition = "all 0.3s"
})


//KeyDown
document.addEventListener('keydown', logKey);
function logKey(e) {
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();
}

//Wheel
function zoom(event) {
      event.preventDefault();
    
      scale += event.deltaY * -0.01;
    
      scale = Math.min(Math.max(.125, scale), 4);
    
      el.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const el = document.querySelector('img');
    el.onwheel = zoom;

    //load
window.addEventListener('load', (event) => {
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        document.body.style.background = bgColor;
        }
    
    random_bg_color();
    });

// drag/drop


var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {

  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
if (event.target.className == "img-content") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
if (event.target.className == "img-content") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
event.preventDefault();
  if (event.target.className == "img-content") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

//resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

//dblClick
const card = document.querySelector('img');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});

//stop nav
const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  console.log("stopped link");
  
  event.preventDefault();
})

