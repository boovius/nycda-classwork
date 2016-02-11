$(document).ready(function(){
	var links = $('a');
	var imageSources = [];
	for (i = 0; i<links.length; i++) {
		imageSources.push($(links[i]).data('img-url'));
	}

	$(".lightbox-link").click(function(e){
		var link_element = $(e.currentTarget);
		var imageURL = link_element.data("img-url");

		var image = $("#lightbox-image");
		image.attr('src', imageURL);
		centerImage(image);

		$('.lightbox-outer').show();

		$(".lightbox-outer").click(function(){
			$(".lightbox-outer").hide();
		});

		$(window).keypress(function(e){
			if (imageURL === $('a').first().data('img-url')){
				imageURL = $($('a')[1]).data('img-url');
				image.attr('src', imageURL);
			} else {
				imageURL = $('a').first().data('img-url');
				image.attr('src', imageURL);
			}
			// var index = imageSources.indexOf(imageURL);
			// if (index + 1 == imageSources.length) {
			// 	imageURL = imageSources[0];
			// 	image.attr('src', imageURL);
			// } else {
			// 	imageURL = imageSources[index + 1];
			// 	image.attr('src', imageURL);
			// }
		});
	});
});

function centerImage(image) {

	image.load(function(){
		var page_height = $(window).height();
		var image_height = image.height();
		var image_height_offset = ( page_height - image_height ) / 2;
		image.parent().css("margin-top", image_height_offset);
	});
}
