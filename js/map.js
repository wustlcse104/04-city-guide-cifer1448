
// javascript

var geocoder,
    latlng,
    townArray = [],
    la,
    ln;

// get id
function $(id) {
	return document.getElementById(id);
}


//initialize
function initialize() {
	geocoder = new google.maps.Geocoder();
	initMap();
}

// init map

function initMap() {
	if (latlng) {
		var map = new google.maps.Map($('map'), {
			center : {
				lat : la,
				lng : ln
			},
			zoom : 11
		});
	} else {
		var map = new google.maps.Map($('map'), {
			center : {
				lat : -37,
				lng : 175
			},
			scrollwheel : false,
			zoom : 5
		});
	}
}











