function setup() {
    createCanvas(750, 750);
      background("purple");
   
  }
  
  function draw () {
   
    stroke("black");
    fill ("pink");
   
    if(mouseIsPressed){
      circle(mouseX, mouseY, 10, 10);
    }
  }