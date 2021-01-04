class Game {
    constructor(){
        
    }
  getState(){
    var gameStateref = database.ref('gameState');
    gameStateref.on("value", (data )=>{
        gameState = data.val();
    })
  }  
  UpdateState(state){
      database.ref('/').update({
          gameState: state
      })

  }
  start(){
      form = new Form();
      form.display();

      player = new Player();
      player.getCount();
      car1 = createSprite(200,200);
      car1.addImage(car1Image);
      car2 = createSprite(400, 200);
      car2.addImage(car2Image);
      car3 = createSprite(600, 200);
      car3.addImage(car3Image);
      car4 = createSprite(800, 200);
      car4.addImage(car4Image);
      cars = [car1, car2, car3, car4]

      
  }

  play(){
      form.hide();
      Player.getPlayerInfo();
      player.getRank();
      if(allPlayers !== undefined){
          background(groundImage);
          image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5)
          var index = 0;
          var x = 250;
          var y;
          for(var p in allPlayers){
              index = index + 1;
              x = x + 300;
              y = displayHeight - allPlayers[p].distance;
              cars[index - 1].x = x;
              cars[index - 1].y = y;
              if(index === player.index){
                  fill("red");
                  ellipse(x, y, 60, 60);
                  cars[index-1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = cars[index-1].y;
              }
          }
          if(keyIsDown(UP_ARROW)&&player.index !== null){
              player.distance += 10;
              player.update();
          }
          if(player.distance>5180){
              gameState = 2;
              player.rank +=1;
              player.updateRank(player.rank);
              prank = player.rank; 
          }
          drawSprites();
      }
  }
  end(){
      console.log("game ended");
      form.end();
  }
}
