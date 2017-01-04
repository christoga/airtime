function fetch(name, time) {
	'use strict';

	alert('Your will arive to ' + name + ' in about ' + 0.375 * time + ' hour')
}

function count() {
	'use strict';
	// Inputs
	var city = $('#city').val();
	if (city == 'tokyo') {
		fetch('Tokyo', 6)
	} else if (city == 'seoul') {
		fetch('Seoul', 5.5)
	} else if (city == 'singapore') {
		fetch('Singapore', 1.5)
	} else if (city == 'angkara') {
		fetch('Angkara', 4)
	} else if (city == 'taipe') {
		fetch('Taipe', 1.5)
	}
}