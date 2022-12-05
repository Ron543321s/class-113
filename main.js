function prelode() {
    
}

function setup() {
 canvas = createCanvas(640, 490);
 canvas.position(110, 250);
 video = createCapture(VIDEO);
 video.hide();
 
 tint_color ="";
}

function draw() {
    image(video,0,0,640,490);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function applytint() {
    tint_color = document.getElementById("color_name").value;
}