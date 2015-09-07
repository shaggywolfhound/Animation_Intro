var canvas, divcanvas, context;

window.onload = init;

function init() {
  canvas = document.querySelector("#mycanvas");
  ctx = canvas.getContext('2d');
  divcanvas = document.querySelector("#intro");
  // Let's adjust the canvas size to the parent size (the div)
  resizeCanvasAccordingToParentSize();
  // Add an event listener for the window resize event
  window.addEventListener('resize', resizeCanvasAccordingToParentSize, false);
  openingtext();
}

function resizeCanvasAccordingToParentSize() {
  // adjust canvas size
  canvas.width = divcanvas.clientWidth;
  canvas.height = divcanvas.clientHeight;
  openingtext();
}

function openingtext(){
  var maintxt = "RH Graphics";
  var txtLength = (ctx.measureText(maintxt).width);
  var screenCenterX = divcanvas.clientWidth/2;
  var screenCenterY = divcanvas.clientHeight/2;
  var txtStart = screenCenterX;
  var x=0;
  var y=0;
  var fontSize = divcanvas.clientWidth/30;
  ctx.font = (fontSize|0) + 'px sans-serif';
  requestAnimationFrame(animationLoop);


function animationLoop(timestamp){
  ctx.clearRect(0,0,canvas.width,canvas.width);
  drawText(maintxt,txtStart,screenCenterY);
  //need to get maintxt length in px
  var textlength = ctx.measureText(maintxt).width;
  ctx.clearRect(screenCenterX,(screenCenterY-textlength),(textlength),(screenCenterY+textlength));
    txtStart=txtStart-3;
    if(txtStart>200){
    requestAnimationFrame(animationLoop);
  }
}
function drawText(txt, x, y){
  ctx.save();
  ctx.translate(x,y);
  ctx.fillStyle = "yellow";
  ctx.fillText(txt,0,0);
  ctx.restore();
  }
}
