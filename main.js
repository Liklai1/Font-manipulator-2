function setup(){
    video=createCapture(VIDEO);
    video.size(450, 400);
    canvas= createCanvas(510, 430);
    canvas.position(560, 150);
    poseNet= ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#0d82db');
}
function modelLoaded(){
    console.log('poseNetisinitialized');
}
function gotPoses(results){

    if(results.length>0){
        console.log(results);
    }
}