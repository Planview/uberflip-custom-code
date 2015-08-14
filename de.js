Hubs.onLoad = function(){
	resizeLimelightPlayer('Hubs.onLoad');
};

Hubs.onPageChange = function() {       
	resizeLimelightPlayer('Hubs.onPageChange');
};

$( ".large-header" ).html( $( "#planview-header-wrapper" ).html() ).removeClass( "large-header" ).css( { "display" : "block", "background" : "none" } );
$( "#planview-header-wrapper" ).css( "display", "none");
$('#moveToTop a').prop('title', 'Back to Top ↑');

var secondaryNav = $('.top-nav'),
	secondaryNavTopPosition = secondaryNav.offset().top;
 
$(window).on('scroll', function(){	
	if($(window).scrollTop() > secondaryNavTopPosition ) {
		secondaryNav.addClass('is-fixed');
		$( ".search-drop-down" ).css( "top", "61px");
		$( ".share-hub, .share-item" ).css( "top", "61px");
		$( ".top-nav h1 a img" ).css( "display", "inline");
		$( ".top-nav h1 a" ).prop('title', 'Planview');
	} else {
		secondaryNav.removeClass('is-fixed');
		$( ".search-drop-down" ).css( "top", (secondaryNavTopPosition + 65) + "px");
		$( ".share-hub, .share-item" ).css( "top", (secondaryNavTopPosition + 65) + "px");
		$( ".top-nav h1 a img" ).css( "display", "none"); 
	}
});

$('button#planview-nav-mobil-toggle-button').click(function() {
  if ($('ul.planview-nav-mobil').hasClass('open')) {
	$('ul.planview-nav-mobil').slideUp("slow");
	$('ul.planview-nav-mobil').removeClass('open');
  } else {
  	var position = $('button#planview-nav-mobil-toggle-button').position();
  	var width = $('ul.planview-nav-mobil').width() - $('button#planview-nav-mobil-toggle-button').width();
  	var height = $('button#planview-nav-mobil-toggle-button').height() - 5;
  	$('ul.planview-nav-mobil').css( {"top" : (position.top + height), "left" : (position.left - width) } ).slideDown("slow");
	$('ul.planview-nav-mobil').addClass('open');	  
  }
});

$(window).resize(function(){
	if ($(window).width() >= 992 && $('ul.planview-nav-mobil').hasClass('open')) {
		$('ul.planview-nav-mobil').slideUp("slow");
		$('ul.planview-nav-mobil').removeClass('open');
	}
	//resizeLimelightPlayer('resize');
	
	//max-width: 1100px;
	if ($( ".page-width" ).width() >= 1100) {
		$( ".page-width" ).width('1100px');
		$( ".page-aligner" ).width('1100px');		
		setLeftMargin();
	}
});

function setLeftMargin() {
	console.log('window width = ' + $(window).width() + '\npage-width class width = ' + $( ".page-width" ).width());
	//if ($( ".page-width" ).width() >= 1200) {
	//if ($( ".page-width" ).width() == 1100) {
		var leftMarginValue = (($(window).width() - $( ".page-width" ).width()) / 2);
		//var leftMarginValue = $(window).width();// - 1100;
		//leftMarginValue = leftMarginValue / 2;
		$( ".page-width" ).css( "margin-left", leftMarginValue);
		console.log('window width = ' + $(window).width() + '\npage-width class width = ' + $( ".page-width" ).width() + '\nmargin-left = ' + leftMarginValue);
		//console.log('margin-left = ');
		//console.log(leftMarginValue);
	//}
}

function resizeLimelightPlayer(msg) {
	//alert('resizeLimelightPlayer - ' + msg);
	if ( $('.limelight-video-respond').length ) { //if Limelight player exists
		$('.limelight-video-respond').each(function () {
			var $wrapper = $(this),
			$video = $(this).find('*[width]'),
			controlsHeight = $(this).data('controlsHeight') || 0,
			controlsWidth = $(this).data('controlsWidth') || 0,
			newHeight,
			newWidth;
	
			// See if we have the aspect ratio already
			if ( ! $wrapper.data('aspectRatio') ) {
				var aspectRatio = ( $video.attr('height') - controlsHeight ) / ( $video.attr('width') - controlsWidth );
				$wrapper.data('aspectRatio', aspectRatio );
			}
	
			newWidth = $wrapper.width();
			newHeight = (newWidth - controlsWidth) * $wrapper.data('aspectRatio') + controlsHeight;
	
			$video.attr('height', newHeight);
			$video.attr('width', newWidth);
		});
	}
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-16646450-1', 'auto', {'name': 'newTracker', 'allowLinker': true}); 
ga('newTracker.require', 'linker'); 
ga('newTracker.linker:autoLink', ['www.planview.com', 'www.planview.de', 'www.planview.fr'] ); 
ga('newTracker.send', 'pageview'); 

var setLeftMarginOnLoad = setLeftMargin();
