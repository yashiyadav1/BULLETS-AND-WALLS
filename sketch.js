var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(40,1500);
  car = createSprite(50,200,50,50);
        car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2)
        }

function draw() {
  background("black");  
  drawSprites();
}
function bounceOff(obj1,obj2){
  if(obj1.x-obj2.x < obj1.width/2+obj2.width/2 &&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2){
      obj1.velocityX=(-1)*obj1.velocityX;
      obj2.velocityX=(-1)*obj2.velocityX;

 } 
 if( obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
  obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      obj1.velocityY=(-1)*obj1.velocityY;
      obj2.velocityY=(-1)*obj2.velocityY;
 }
}
function IsTouching(oj1,oj2){
  if (oj1.x-oj2.x < oj1.width/2+oj2.width/2 &&
    oj2.x-oj1.x<oj1.width/2+oj2.width/2 &&
       oj1.y-oj2.y<oj1.height/2+oj2.height/2 &&
       oj2.y-oj1.y<oj1.height/2+oj2.height/2){
       return true;
     }
     else {
    return false;
     }
  
}
