// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	// Change form label's text to funny phrases
	changeLabels();

})();


function changeLabels(){
	var phrases = ["Left Butt cheek's name","Right Butt cheek's name","Demon name",];
	var labelArray = Array.from(document.getElementsByTagName("label"));
	labelArray.map(function callback(label, index){
		label.innerHTML = phrases[index%phrases.length];
	});
}