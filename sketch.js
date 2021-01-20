var ball,ballimg,paddle, paddleimg;
function preload() {
  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(50,150,10,10);
  ball.addImage(ballimg);
  paddle=createSprite(350,180)
  paddle.addImage(paddleimg);
  
  ball.velocityX=9;
  ball.velocityY=8;

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20
  }
  drawSprites();
  
}

