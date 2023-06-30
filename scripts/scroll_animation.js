var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#121212';
var star = document.getElementById('star');
var button = document.getElementById('button');
var textDeveloper = document.getElementById('text_developer');

// trigger this function every time the user scrolls
window.onscroll = function (event) {
	var scroll = window.pageYOffset;
	var scale = 1 + ((scroll * 2) / 1000);
	var percentage = (scale - 1) * 50;
	if (scroll < 10) {
		textDeveloper.style.opacity = "1";
	} else {
		var alpha = 1 - (scroll / 600);
		if (alpha < 0) alpha = 0;
		textDeveloper.style.opacity = "" + alpha;
		//console.log("alpha " + alpha);
	} 
	
	if (scroll < 300) {
		body.style.backgroundColor = '#121212';
		//star.style.transform = 'translateX(' + scroll + 'px)';
		//star.style.transform = 'scale(' + scale + ')';
		//star.style.transform = 'translate(' + percentage + '%, ' + '0%)';
		//star.style.transition= " all 500ms";
	} else if (scroll >= 600 && scroll < 1200) {
		body.style.backgroundColor = '#242424';
	} else if (scroll >= 1200 && scroll < 1800) {
		body.style.backgroundColor = '#484848';
	} else if (scroll >= 1800 && scroll < 3000) {
		body.style.backgroundColor = '#aaaaaa';
	}
	if (scale != 1) {
		button.style.transform = 'translate(-180%, 0%)';
		button.style.transition= " all 500ms";
		star.style.transform = 'translate(-180%, 0%)';
		star.style.transition= " all 500ms";
	} else {
		button.style.transform = 'translate(0%, 0%)';
		button.style.transition= " all 500ms";
		star.style.transform = 'translate(0%, 0%)';
		star.style.transition= " all 500ms";
	}
	textDeveloper.style.transform = 'translateY(' + scroll + 'px)';
}
