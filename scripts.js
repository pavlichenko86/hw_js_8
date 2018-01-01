$(document).ready(function(){
	$('.go').click(function(){
		event.preventDefault();
		let per = $('#third').val();
		let link = new URL(per);
		link = link.hostname.replace(/\.\D*/g, "");
		
		link = link.replace(/[oO]/g, 0);
		link = link.replace(/[l]/g, 1);
		link = link.replace(/[i]/g, 3);
		link = link.replace(/[s]/g, 5);
		let result = link + Math.random().toString(36).slice(2, 6);
	    $('.url').append("<p>Was: " + per + "</p>" + "<p>Now: " + result + "</p>");
	});
});