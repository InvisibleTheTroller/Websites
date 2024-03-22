
var greetings = document.getElementById("greetings");
var secondText = document.getElementById("secondText");
var thirdText = document.getElementById("thirdText");
var pen = document.getElementById("pen");
var trashCan = document.getElementById("trashCan");

var opacityForGreetings = 1;
var opacityForSecondText = 0;

var thirdTextLengthReached = false;
var thirdTextLength = 0;

var thirdTextContent = "Hmm, chủ yếu tui nhắn vì muốn rủ bà ngày mai đi chơi, ăn ở đâu đó một chút thôi. Khoảng 10-15 phút cx đc."

var clickCounts = 0;

greetings.addEventListener("click", function() {
	function fadeEffect() {
		opacityForSecondText += 0.1;
		opacityForGreetings -= 0.1;
		secondText.style.opacity = opacityForSecondText;
		greetings.style.opacity = opacityForGreetings;
		
		if(opacityForSecondText >= 1) {
			greetings.remove();
			clearTimeout(fadeEffect);
			pen.style.display = "flex";
			
			$(function() {
				$(pen).draggable({
					start: function() {
						pen.style.color = "lightblue";
					},
					
					drag: function() {
						pen.style.color = "lightblue";
					},
					
					stop: function() {
						pen.style.color = "black";
					}
				});
				$(secondText).droppable({
					drop: function() {
						pen.remove();
						trashCan.style.display = "flex";
						secondText.textContent = "Nhưng do tôi 67757678207A6E6772 rảnh nên mới lm v."
						$(secondText).draggable();
						$(trashCan).droppable({
							accept: secondText,
							over: function() {
								trashCan.style.color = "red";
							},
							
							out: function() {
								trashCan.style.color = "black";
							},
							
							drop: function() {
								secondText.remove();
								trashCan.remove();
								
								thirdText.textContent = thirdTextContent;
								
							}
						});
					}
				});
			});
			
		}
		
		setTimeout(fadeEffect, 75);
	}
	fadeEffect();
});

thirdText.addEventListener("click", function() {
	clickCounts++;
	if(clickCounts == 1) {
		thirdText.textContent = "Ko cx ko sao nhaa.";
	} else if(clickCounts == 2) {
		thirdText.textContent = "Chắc chỉ v thôi, bye!";
	}
	
});
