document.getElementById('shirt').style.backgroundColor = "#de3222";
var shirtColor = document.getElementById('shirt').style.backgroundColor;

window.onload = function(e) {
	document.getElementById('shirt').style.backgroundColor = "#de3222";
	var shirtColor = document.getElementById('shirt').style.backgroundColor;

	 	// rgb(xxx, xxx, xxx);
	

		// Searches the rgb colors
	var extractColors = /(\d{1,3}), (\d{1,3}), (\d{1,3})/;
	var colorArray = extractColors.exec(shirtColor);
	colorR = colorArray[1];
	colorG = colorArray[2];
	colorB = colorArray[3];
		// Sets the range values to the color = onload
	document.getElementById('rangeInputR').value = colorR;
	document.getElementById('rangeInputG').value = colorG;
	document.getElementById('rangeInputB').value = colorB;
	document.getElementById('r').value = colorR;
	document.getElementById('g').value = colorB;
	document.getElementById('b').value = colorG;

		// Grayscale
	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;

}

var shirt = document.getElementById('shirt');

function red() {
	document.getElementById('shirt').style.backgroundColor = "rgb(255, 0, 0)";

	document.getElementById('rangeInputR').value = 255;
	document.getElementById('rangeInputG').value = 0;
	document.getElementById('rangeInputB').value = 0;

		// Sets the range values to the color = onload
	document.getElementById('rangeInputR').value = colorR;
	document.getElementById('rangeInputG').value = colorG;
	document.getElementById('rangeInputB').value = colorB;
	document.getElementById('r').value = colorR;
	document.getElementById('g').value = colorB;
	document.getElementById('b').value = colorG;

}

function blue() {
	document.getElementById('shirt').style.backgroundColor = "rgb(0, 0, 255)";

	document.getElementById('rangeInputR').value = 0;
	document.getElementById('rangeInputG').value = 0;
	document.getElementById('rangeInputB').value = 255;

	document.getElementById('rangeInputR').value = colorR;
	document.getElementById('rangeInputG').value = colorG;
	document.getElementById('rangeInputB').value = colorB;
	document.getElementById('r').value = colorR;
	document.getElementById('g').value = colorB;
	document.getElementById('b').value = colorG;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
	// alert(colorGr);
}

function green() {
	document.getElementById('shirt').style.backgroundColor = "rgb(0, 128, 0)";

	document.getElementById('rangeInputR').value = 0;
	document.getElementById('rangeInputG').value = 128;
	document.getElementById('rangeInputB').value = 0;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function magenta() {
	document.getElementById('shirt').style.backgroundColor = "rgb(255, 0, 255)";

	document.getElementById('rangeInputR').value = 255;
	document.getElementById('rangeInputG').value = 0;
	document.getElementById('rangeInputB').value = 255;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function gray() {
	document.getElementById('shirt').style.backgroundColor = "rgb(128, 128, 128)";

	document.getElementById('rangeInputR').value = 128;
	document.getElementById('rangeInputG').value = 128;
	document.getElementById('rangeInputB').value = 128;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function black() {
	document.getElementById('shirt').style.backgroundColor = "rgb(0, 0, 0)";

	document.getElementById('rangeInputR').value = 0;
	document.getElementById('rangeInputG').value = 0;
	document.getElementById('rangeInputB').value = 0;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function orange() {
	document.getElementById('shirt').style.backgroundColor = "rgb(255, 165, 0)";

	document.getElementById('rangeInputR').value = 255;
	document.getElementById('rangeInputG').value = 165;
	document.getElementById('rangeInputB').value = 0;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function white() {
	document.getElementById('shirt').style.backgroundColor = "rgb(255, 255, 255)";

	document.getElementById('rangeInputR').value = 255;
	document.getElementById('rangeInputG').value = 255;
	document.getElementById('rangeInputB').value = 255;

	colorGr = parseFloat(colorR) + parseFloat(colorG) + parseFloat(colorB);
	colorGr = colorGr / 3;
	document.getElementById('gr').value = colorGr;
	document.getElementById('gt').value = colorGr;
}

function customColor() {
	var color = document.getElementById("customCol").value;
	document.getElementById("shirt").style.backgroundColor = color;
}

function newText() {
	var text = document.getElementById("newText").value;
	document.getElementById("text").innerHTML = text;
}

function textColor() {
	var Tcolor = document.getElementById("Tcolor").value;
	document.getElementById("text").style.color = Tcolor;
}

function sizeText() {
	var Tsize = document.getElementById('Tsize').value;
	document.getElementById('text').style.fontSize = Tsize;
}

function changeBackground() {
	var RS = document.getElementById('R').value;
	var GS = document.getElementById('G').value;
	var BS = document.getElementById('B').value;

	document.getElementById('shirt').style.backgroundColor = "rgb("+RS+", "+GS+", "+BS+")";
}

function italicFont() {
	if (document.getElementById('IT').checked == true) {
		document.getElementById('text').style.fontStyle = "italic";
	}
	else {
		document.getElementById('text').style.fontStyle = "normal";
	}
}

function boldFont() {
	if (document.getElementById('BT').checked == true) {
		document.getElementById('text').style.fontWeight = "bold";
	}
	else {
		document.getElementById('text').style.fontWeight = "normal";
	}
}

var changeFont = function(font) {
	document.getElementById('text').style.fontFamily = font.value;
}

function changeTextSize() {
	var textSize = document.getElementById('fontSize').value;
	document.getElementById('text').style.fontSize = textSize;
}

function updateColor() {
	// var sliderR = 
}

function updateTextInputR(val) {
	document.getElementById('textInputR').value=val;
}

function updateTextInputG(val) {
	document.getElementById('textInputG').value=val;
}

function updateTextInputB(val) {
	document.getElementById('textInputB').value=val;
}

function updateShirtColorSlider() {
	var sliderR = document.getElementById('rangeInputR').value;
	var sliderG = document.getElementById('rangeInputG').value;
	var sliderB = document.getElementById('rangeInputB').value;

	document.getElementById('r').value = sliderR;
	document.getElementById('g').value = sliderG;
	document.getElementById('b').value = sliderB;

	document.getElementById('shirt').style.backgroundColor = "rgb("+sliderR+","+sliderG+","+sliderB+")";
}

function updateGrayscale(val) {
	document.getElementById('gt').value = val;

	document.getElementById('shirt').style.backgroundColor = "rgb("+val+", "+val+", "+val+")";

	document.getElementById('rangeInputR').value = val;
	document.getElementById('rangeInputG').value = val;
	document.getElementById('rangeInputB').value = val;
	document.getElementById('r').value = val;
	document.getElementById('g').value = val;
	document.getElementById('b').value = val;
}