

var distance,tri,p1,p2,p3;

var sX = screen.width/2;
var sY = screen.height/2;

var a2,b2,c2;





function setup() {
createCanvas(screen.width,screen.height);



}





function isTouching(O1,O2)
{
  if (O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y <O2.height/2 + O1.height/2)
  {
   return true;
  }
 else 
 {
  return false;
 }
}

// equation used is 
// (groundY)-((playerH/2)+(groundH/2))
// (groundX)-((playerW/2)+(groundW/2))
//


function math()
{
  // base
  a2 = (screen.width/2)-mouseX;
  a2AvgX = (sX+mouseX)/2
  a2AvgY = (sY+mouseY)/2

  strokeWeight(6);
  stroke(200);
  line(mouseX,mouseY,sX,sY);
  
  textSize(50);
  fill(0, 255,0,255);
  text(a2,a2AvgX,a2AvgY);
  
  //perpendicular
  b2 = (sX*0.5)-sX;
  b2AvgX = (sX+sX)/2
  b2AvgY = (sY/2+sY)/2

  strokeWeight(6);
  stroke(200);
  line(sX,sY,sX,sY/2);

  textSize(50);
  fill(0, 255,0,255);
  text(b2,b2AvgX,b2AvgY);
  
  //hypotenuse 
  c2 = (sq(a2))+(sq(b2));
  c2AvgX = (sX+mouseX)/2
  c2AvgY = (sY/2+mouseY)/2

  strokeWeight(6);
  stroke(200);
  line(sX,sY,sX,sY/2);

  textSize(50);
  fill(0, 255,0,255);
  c2sqrt = int(sqrt(c2));
  text(c2sqrt,c2AvgX,c2AvgY);



}



function draw() 
{
  
  background(0,0,0); 
  
  fill(255,255,255,255)
  p1 = circle((screen.width/2),(screen.height/2),10);
  p2 = circle(mouseX,mouseY,10);
  p3 = circle((screen.width/2),(screen.height/4),10);

  

  //console.log(p1.positionX)

  var mX = mouseX;
  var mY = mouseY;  
  
  fill(200, 150, 150);
  tri = triangle(sX,sY,mX,mY,(screen.width/2),(screen.height/4));
  
  //mouse Point
  textSize(50);
  fill(0, 255,0,255);
  text(mouseY+"y",mouseX-80,mouseY);
  text(",",mouseX-100,mouseY);
  text(mouseX+"x",mouseX-220,mouseY);
  
  //point Aa
  textSize(50);
  fill(0,0,255,255);
  text(sY/2+"y",sX+135,sY/2);
  text(",",sX+120,sY/2);
  text(sX+"x",sX+10,sY/2);


  //point B 
  textSize(50);
  fill(255, 0,0,255);
  text(sX+"x",sX+10,sY);
  text(",",sX+120,sY);
  text(sY+"y",sX+130,sY);
  
  math() 
  
  drawSprites();
  
}




