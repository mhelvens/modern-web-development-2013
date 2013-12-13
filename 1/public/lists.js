'use strict';

function add() {
	var li = document.createElement("li");
	var input = document.createElement("input");
	var text = document.createElement("span");

	li.appendChild(input);
	li.appendChild(document.createTextNode(" - "));
	li.appendChild(text);

	function update() { text.textContent = input.value; };

	input.onkeydown = update;
	input.onkeyup = update;

	document.getElementById("list").appendChild(li);
}
