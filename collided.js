function hasCollided(bullet1,wall1){
  
  
    if(wall1.x-bullet1.x < bullet1.width/2 + wall1.width/2){
      
      return true;  
    }
    else{
return false;

    }
    
    }  
  
  
  