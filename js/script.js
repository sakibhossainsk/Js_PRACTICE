//item 1 start
//text change
function textChange(){
	document.getElementById('h2').innerHTML="Hello World.";
} 
//text change
function showDate(){
	document.getElementById('d_h2').innerHTML= Date();
} 
//Blub ON/OFF
function bulbON(){
	document.getElementById('img').src = "images/on.gif";
}
function bulbOFF(){
	document.getElementById('img').src = "images/off.gif";
}
//font Change
function fontChange(){
	document.getElementById('f_h2').style.fontSize = "50px";
}
//content show/hide
function showText(){
	document.getElementById('c_h2').style.display = "block";
}
function hideText(){
	document.getElementById('c_h2').style.display = "none";
}

//Dwrite
function writeOutput(){
	document.write(" Hello Bangladesh");
}
//WAlert
function wAlert(){
	window.alert("Hello world");
}
//WAlert
function cLog(){
	console.log("Hello Bangladesh");
}

//variable output
var number1, number2; 
number1 = 50
number2 = 70
number1 += number2

function varOutput(){
	document.getElementById('v_h2').innerHTML = number1;
}
