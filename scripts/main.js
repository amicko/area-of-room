'use strict';
var $ = require('jquery');

$('document').ready(function() {
	$('#roomForm').on('submit', function(e) {
		e.preventDefault();
		var $width = $('#width');
		var $length = $('#length');
		var $output = $('#areaOutput');

		var roomArea = $width.val() * $length.val()
		$output.html('<div>The area of the room is ' + roomArea + 'ft^2 / ' + (roomArea * 0.3048).toFixed(2) + 'm^2')
	})
})