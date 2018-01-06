$(document).ready(function(){
	$('.go').click(function(event){
		event.preventDefault();
		let per = $('#third').val();
		let link = new URL(per);
		link = link.hostname.replace(/\.\D*/g, "");
		
		link = link.replace(/[oO]/g, 0).replace(/[l]/g, 1).replace(/[i]/g, 3).replace(/[s]/g, 5);
		let result = link + Math.random().toString(36).slice(2, 6);
	    $('.url').append("<p>Was: " + per + "</p>" + "<p>Now: " + result + "</p>");
	});
});
