
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;


function add() {
background_imgTag=new Image();
background_imgTag.onload=uploadBackground
background_imgTag.src=background_image

greencar_imgTag=new Image();
greencar_imgTag.onload=uploadgreencar
greencar_imgTag.src=greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,0,0,canvas.width,canvas.height);
	
}


window.addEventListener("keydown", my_keydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
if(keyPressed == '38') {
    up()
    console.log("up");
}    
if(keyPressed == '40') {
    down()
    console.log("down");
}  
if(keyPressed == '37') {
    left()
    console.log("left");
}      
if(keyPressed == '39') {
    right()
    console.log("right");
}
}  
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(rover_Y >= 0){
        rover_Y=rover_Y-10;
        uploadBackground();
        uploadgreencar();
    }
}
function down(){
    console.log(rover_Y)
    if(rover_Y <= 500){
        rover_Y=rover_Y+10;
        uploadBackground();
		uploadgreencar();
    }
    
}
function left(){
    if(rover_X >= 0){
        rover_X=rover_X-10;
        uploadBackground();
		uploadgreencar();
    }
}
function right(){
   console.log(rover_X)
    if(rover_X <= 700){
        rover_X=rover_X+10;
        uploadBackground();
		uploadgreencar();
    }
}