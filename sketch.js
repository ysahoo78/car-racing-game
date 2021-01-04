var database;
var playerCount;
var gameState;
var game;
var player;
var form;
var car1, car2, car3, car4, cars = [];
var allPlayers;
var car1Image, car2Image, car3Image, car4Image, trackImage, groundImage, formImage, endImage
var prank;
function preload(){
  car1Image = loadImage("images/car1.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  car4Image = loadImage("images/car4.png");
  groundImage = loadImage("images/ground.png");
  trackImage = loadImage("images/track.jpg");
  formImage = loadImage("images/maxresdefault.jpg");
  endImage = loadImage("images/end.jpg")

}


function setup(){
 
  createCanvas(displayWidth - 50, displayHeight - 200);

  playerCount = 0;

  gameState = 0;

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(gameState === 0){
    background(formImage);
  }
  


  if(playerCount === 4){
    game.UpdateState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.end();
    background(endImage);
  }

    
    
  
}


