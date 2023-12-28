var X = 0;
var Y = 0;
var Draw_Cicle = ""; 
var Draw_Rectangle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function setup(){
    canvas = createCanvas(900,600);
}

function start(){
    document.getElementById("status").innerHTML = "The Device is waiting for a command. Please speak to draw something";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);


var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "Your command has been recognized as: " + content;

if(content == "circle"){
 X = Math.floor(Math.random() * 900);
 Y = Math.floor(Math.random() * 600);

 document.getElementById("status").innerHTML = "Drawing circle";
 Draw_Cicle = "set";
}

if(content == "rectangle"){
    X = Math.floor(Math.random() * 900);
    Y = Math.floor(Math.random() * 600);
   
    document.getElementById("status").innerHTML = "Drawing rectangle";
    Draw_Rectangle = "set";
}
}

function draw(){
if(Draw_Cicle = "set"){
 radius = Math.floor(Math.random() * 50);
 circle(X,Y,radius);

 document.getElementById("status").innerHTML = "Your circle is completed";
 Draw_Cicle = "";
}

if(Draw_Rectangle = "set"){
 width = Math.floor(Math.random() * 50);
 height = Math.floor(Math.random() * 50);
 rect(X,Y,width,height);

 document.getElementById("status").innerHTML = "Your rectangle is completed";
 Draw_Rectangle = "";
}
}