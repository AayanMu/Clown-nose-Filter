nx=0;
ny=0;

function preload(){
    img= loadImage('Clownnose.png');
}

function setup(){
    canvas= createCanvas(500, 500);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.size(500,500);
    vid.hide();

    ps= ml5.poseNet(vid , modelLoaded);
    ps.on('pose', gotPoses);
}

function draw(){
    image(vid, 0, 0, 500, 500)
    image(img,nx-32,ny-22,60,60);
}

function Apply_filter(){
   save("Filtered_Image.png");
}

function modelLoaded(){
    console.log("Model has been loaded")
}

function gotPoses(results){
    if(results.length > 0){
     console.log(results);
     nx= results[0].pose.nose.x;
     ny= results[0].pose.nose.y;
    }
}
