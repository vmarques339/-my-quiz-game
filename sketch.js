var  gameState, contestantCount, database;
var  quiz, question, contestantCount;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

     database=firebase.database();

     game=new Game();
     game.getState();
     game.start();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}