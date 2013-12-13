'use strict';

function add() {
	var li = $('<li><input> - <span></span></li>').appendTo('#list');

	var input = li.find('input');

	function update() { li.find('span').text(input[0].value); }

	input.keydown(update).keyup(update);
}
