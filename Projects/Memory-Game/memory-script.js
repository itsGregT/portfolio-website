/************************************************************
Author: Greg Thomas
Description: Program to run Javascript Memory Game
**************************************************************/


// Add an event based on the browser
function addEvent(object, evName, fnName, cap) {
	if(object.attachEvent){
		object.attachEvent("on"+ evName, fnName);
	}
	else if(object.addEventListener){
		object.addEventListener(evName, fnName, cap);
	}
}

function randomSort(arr) {
	arr.sort(function(){
		return 0.5 - Math.random();
	});
}

var flipCount = 0;
var firstFlip; 
var secondFlip;
var tryCount = document.getElementById("attempt-count");
tryCount.innerHTML = 0;
var matchCount = document.getElementById("match-count");
matchCount.innerHTML = 0;


addEvent(window, "load", setupTiles, false);

function setupTiles() {
	var tiles = new Array();

	for(var i = 0; i < document.images.length; i++){
		var tile = document.images[i];

		if(tile.className == "tile" && tile.parentNode.tagName == "A"){
			tiles.push(tile);
		}
	}

	var tileImages = new Array();
	tileImages.length = tiles.length;

	for(var i = 0; i < 8; i++){
		var tileImage = new Image();
		tileImage.src = "./img/tile" + i +".jpg";

		tileImages.push(tileImage);
	}

	for(var i = 0; i < 8; i++){
		var tileImageMatch = new Image();
		tileImageMatch.src = "./img/tile" + i + ".jpg";

		tileImages.push(tileImageMatch);
	}

	randomSort(tileImages);

	for(var i = 0; i < tiles.length; i++){
		tiles[i].image = tileImages[i].src;
		tiles[i].onclick = flipTile;
	}

	document.getElementById("show-tiles").onclick = function() {
		  for(var i = 0; i < tiles.length; i++){
		  	tiles[i].src = tiles[i].image;
		  }
	}

	document.getElementById("reset-tiles").onclick = function() {
		location.reload();
	}

	document.getElementById("win-reset").onclick = function() {
		location.reload();
	}
}

function flipTile() {

	if(flipCount == 0){
		this.src = this.image;
		firstFlip = this;

		tryCount.innerHTML++;
		flipCount++;
	}
	else if(flipCount == 1){
		this.src = this.image;
		secondFlip = this;

		tryCount.innerHTML++;
		flipCount++;

		checkTiles(firstFlip, secondFlip);
	}
	return false;
}

function checkTiles(tile1, tile2) {

	if(tile1.image !== tile2.image){
		setTimeout(flipBack, 800);
	}
	else if(firstFlip == secondFlip){
		alert("Please select a different tile.");
		flipCount = 1;
	}
	else if(tile1.image == tile2.image){
		flipCount = 0;
		matchCount.innerHTML++;
		tile1.style.opacity = "0.7";
		tile1.style.border = "solid 2px #00ff00";
		tile2.style.opacity = "0.7";
		tile2.style.border = "solid 2px #00ff00";

		firstFlip.onclick = function() {
			return false;
		}

		secondFlip.onclick = function() {
			return false;
		}
	}

	if(matchCount.innerHTML == 8){
		document.getElementById("victory-message").style.display = "block";
		document.getElementById("attempts").innerHTML = tryCount.innerHTML/2;
	}
}

function flipBack() {
	firstFlip.src = "./img/tile.jpg";
	secondFlip.src = "./img/tile.jpg";
	flipCount = 0;
}





































