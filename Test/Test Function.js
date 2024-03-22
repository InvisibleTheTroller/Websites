var testText = document.getElementById("testText");
var opacity = 0;

testText.addEventListener("click", function() {
	function fadeEffect() {
		opacity += 0.1;
		testText.style.opacity = opacity;
		setTimeout(fadeEffect, 50);
	}
	fadeEffect();
});