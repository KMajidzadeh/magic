//Variable declaration
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var color = "#0095DD"

var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var score = 0;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1){
            var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}	

function collisionDetection(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status == 1){
                if(x > b.x && x < b.x+brickWidth &&
                   y > b.y && y < b.y+brickHeight){
                     dy = -dy;
                     b.status = 0;
                     score++;
                     console.log(score);
                     if(score == (brickColumnCount*brickRowCount) )
                     {
                        console.log(score);
                        alert("YOU WIN! Game over.");
                        document.location.reload();
                     }
            }
            }
        }
    }
}

function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}






function getRandomColor(){
    var letters = '012345689ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;

}



function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

//paddle stuff
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", 
    keyDownHandler, false);

document.addEventListener("keyup", 
    keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode==39){
        rightPressed = true;
    }
    else if(e.keyCode==37){
        leftPressed = true;
    }
}//end function

function keyUpHandler(e) {
    if(e.keyCode==39){
        rightPressed = false;
    }
    else if(e.keyCode==37){
        leftPressed = false;
    }
}

function drawPaddle() {
ctx.beginPath();
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBricks();
drawBall();
drawPaddle();
drawScore();
collisionDetection();

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    color = getRandomColor();
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
    color = getRandomColor();
}
else if(y + dy == canvas.height-ballRadius){
    if(x > paddleX && x < paddleX + paddleWidth){
        dy = -dy;
    }
    else{
    alert('Game Over');
    document.location.reload();
    }
}

if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}

x += dx;
y += dy;
}





setInterval(draw, 10);