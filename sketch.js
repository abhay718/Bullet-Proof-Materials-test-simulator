var bullet,wall;
var speed,weight,thickness;
var bulleti;
var bullet1,wall1;
//var status;


function preload(){
bulleti = loadAnimation("bullet.png")
}



function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50, 200, 25, 5);
  bullet.shapeColor = "white";
 
  //status=createSprite(850, 100, 30, 30);
 
  thickness = Math.round(random(22,83));
 
  wall = createSprite(1200,200,thickness,height/2);
 
  speed = Math.round(random(223,321));
 
  weight = Math.round(random(30,52));
 
  bullet.velocityX = speed;
 
  bullet.weight = weight;
  
}
function draw() {
 
  background("black");
  
  bullet.addAnimation("bullet",bulleti);
  bullet.scale = 0.3;
  
  textSize(20);
 
  fill("white");
  
  text("Weight of bullet: "+ weight+"grams",10,50);
  text("Speed of Bullet: " + speed+"miles/hr",270,50);
  text("Thickness of Wall: " + thickness+"cm",600,50);
  text("Press Ctrl+R to shootbullet again",950,50);

    //Text("Status:",status.x-50,status.y);
  

   if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;

      
      
    var deform = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
  
    if(deform<10){
    wall.shapeColor = "green";
    //status.shapeColor = "green";
    }
  
    if(deform>10){
    wall.shapeColor = "red";
    //status.shapeColor = "yellow";

   }



   }  


 drawSprites();
  
}
