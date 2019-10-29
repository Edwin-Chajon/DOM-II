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