	var numberofFaces = 5;
	var leftsideImages;
	var numRounds = 0;
	var leftside;
	var rightside;
	var thebody;
function generateFaces() {

	leftside = document.getElementById("leftside");
	rightside = document.getElementById("rightside");
	thebody = document.getElementById("thebody");

	for (var i = 0; i < numberofFaces; i++) {
		var smileImg = document.createElement("img");
		smileImg.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		var topPosition = Math.floor(Math.random()*400) +1;
		var leftPosition = Math.floor(Math.random()*400) +1;
		smileImg.style.top = topPosition + "px";
		smileImg.style.left = leftPosition + "px";
		leftside.appendChild(smileImg);
		
	}
	
	 // Clone div#leftSide, delete last img node, add to div#rightSide
	leftsideImages = leftside.cloneNode(true);
	leftsideImages.removeChild(leftsideImages.lastElementChild);
	rightside.appendChild(leftsideImages);
	
	leftside.lastChild.onclick = function addImages (event) {
		event.stopPropagation();
		numRounds += 1;
		numberofFaces +=5;
		while(leftside.lastChild) {
			leftside.removeChild(leftside.lastChild);
		}
		while(rightside.lastChild) {
			rightside.removeChild(rightside.lastChild);
		}
		
		generateFaces();
	}
	
	thebody.onclick = function abort() {
		alert("You didn't find the extra face.  Game over!\nYou found " + numRounds + " extra faces!");
		theBody.onclick = null;
		leftside.lastChild.onclick = null;
	}
		
}