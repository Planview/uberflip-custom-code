(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 

Hubs.onLoad = function(){
	resizeLimelightPlayer('Hubs.onLoad');
	changeWebcastLinkText();

	ga('create', 'UA-16646450-1', 'auto', {'name': 'newTracker', 'allowLinker': true}); 
	ga('newTracker.require', 'linker'); 
	ga('newTracker.linker:autoLink', ['go.planview.com', 'resources.planview.com', 'www.planview.com', 'www.planview.de', 'www.planview.fr'] ); 
	ga('newTracker.send', 'pageview', window.location.pathname);
};

Hubs.onPageChange = function() {       
	resizeLimelightPlayer('Hubs.onPageChange');
	changeWebcastLinkText();

	ga('create', 'UA-16646450-1', 'auto', {'name': 'newTracker', 'allowLinker': true}); 
	ga('newTracker.require', 'linker'); 
	ga('newTracker.linker:autoLink', ['go.planview.com', 'resources.planview.com', 'www.planview.com', 'www.planview.de', 'www.planview.fr'] ); 
	ga('newTracker.send', 'pageview', window.location.pathname);
};

$( ".large-header" ).html( $( "#planview-header-wrapper" ).html() ).removeClass( "large-header" ).css( { "display" : "block", "background" : "none" } );
$( "#planview-header-wrapper" ).css( "display", "none");
$('#moveToTop a').prop('title', 'Zurück nach oben ↑');

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

$(window).on('resize', function(e){	
	if ($(window).width() >= 992 && $('ul.planview-nav-mobil').hasClass('open')) {
		$('ul.planview-nav-mobil').slideUp("slow");
		$('ul.planview-nav-mobil').removeClass('open');
	}
	setPageAlignerClass();
	resizeLimelightPlayer('resize');
});

function setPageAlignerClass() { 
	if ($(window).outerWidth() <= 543) { //Uberflip change point is 560
		$( ".page-width .page-aligner" ).css( "width", '96%');
	} else if ($(window).outerWidth() <= 562) { //Uberflip change point is 560
		$( ".page-width .page-aligner" ).css( "width", 540).css( "margin-left", 0);
	} else if ($(window).outerWidth() <= 720) { //Uberflip change point
		$( ".page-width .page-aligner" ).css( "width", 540).css( "margin-left", "auto");
	} else if ($(window).outerWidth() <= 845) { //Uberflip change point is 860
		$( ".page-width .page-aligner" ).css( "width", 580);
	} else if ($(window).outerWidth() <= 1336) { //Uberflip change point
		$( ".page-width .page-aligner" ).css( "width", 810);
	} else {
		$( ".page-width .page-aligner" ).css( "width", 1080);
	}
	// set left margin for 'back to top' link
	var moveToTopMarginLeft = 0;
	// does not show on mobile
	if ($(window).outerWidth() <= 720) { //Uberflip change point
		$( "#moveToTop a" ).css( "display", "none");
	} else { 
		$( "#moveToTop a" ).css( "display", "block");
		if ($(window).outerWidth() <= 845) { //Uberflip change point
			moveToTopMarginLeft = ((($(".page-width .page-aligner").outerWidth() / 2) + 50) * -1);
		} else if ($(window).outerWidth() <= 965) { //Uberflip change point is 980
			moveToTopMarginLeft = 0;
		} else {
			moveToTopMarginLeft = ((($(".page-width .page-aligner").outerWidth() / 2) + 50) * -1);
		}
	}
	//console.log('window.outerWidth = ' + $(window).outerWidth() +'\nmoveToTopMarginLeft = ' + moveToTopMarginLeft);
	$( "#moveToTop" ).css( "margin-left", moveToTopMarginLeft);
}

function changeWebcastLinkText() {
	if (window.location.href.indexOf("webcast") > -1) { 		
		$( "a:contains('Artikel lesen')" ).each(function() {
			$( this ).html( "Video anschauen" );
		});
	} else if ($( ".bread-crumbs a[data-page-title|='Webcasts']" ).is(':contains("Webcasts")')) {
		// look for "Webcasts" in the breadcrumb, and then change text on the page
		$( "span.title:contains('Diesen Artikel teilen')" ).html( "Diesen Webcast teilen" );
		$( "li.share-text:contains('Diesen Artikel teilen')" ).html( "Diesen Webcast teilen" );
		$( "p.no-more:contains('Keine vorherigen Artikel')" ).html( "Keine vorherigen Webcast" );
		$( "p.no-more:contains('Keine weiteren Artikel')" ).html( "Keine weiteren Webcast" );
		$( "h6:contains('Nächster Artikel')" ).html( "Nächster Webcast" );
		$( "h6:contains('Vorherige Artikel')" ).html( "Vorherige Webcast" );
		$( "span.title:contains('Diesen Artikel teilen')" ).html( "Diesen Webcast teilen" );	
	}
}

function resizeLimelightPlayer(msg) {
	//console.log('resizeLimelightPlayer - ' + msg);
	if ( $('.limelight-video-respond').length ) { //if Limelight player exists
		$('.limelight-video-respond').each(function () {
			var $wrapper = $(this),
			$video = $(this).find('*[width]'),
			controlsHeight = $(this).data('controlsHeight') || 0,
			controlsWidth = $(this).data('controlsWidth') || 0,
			newHeight,
			newWidth;
	
			// see if we have the aspect ratio already
			if ( ! $wrapper.data('aspectRatio') ) {
				var aspectRatio = ( $video.attr('height') - controlsHeight ) / ( $video.attr('width') - controlsWidth );
				$wrapper.data('aspectRatio', aspectRatio );
			}
	
			newWidth = $wrapper.width();
			newHeight = (newWidth - controlsWidth) * $wrapper.data('aspectRatio') + controlsHeight;
	
			$video.attr('height', newHeight);
			$video.attr('width', newWidth);
			
			// this code is needed for mobile		
			$(".limelight-player-footprint").removeAttr( 'height' );
			$(".limelight-player-footprint").removeAttr( 'width' );
			$(".LimelightEmbeddedPlayer").removeAttr( 'height' );
			$(".LimelightEmbeddedPlayer").removeAttr( 'width' );
			$(".limelight-player-footprint").height(newHeight);
            $(".limelight-player-footprint").width(newWidth);
			$(".LimelightEmbeddedPlayer").height(newHeight);
            $(".LimelightEmbeddedPlayer").width(newWidth);
		});
	}
}

var setPageAlignerClassOnLoad = setPageAlignerClass();
