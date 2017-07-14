 // backstretch code
        $('.foo').backstretch([
              "images/images/bg-1_02.png",
              "images/images/bg-2_02.png",
              "images/images/bg-3_02.png"
      ], {
        fade: 750,
        duration: 3000
    });
        //wow code
         new WOW().init();
       // easyPieChart - wayPoint
	$('#site-skills').waypoint(function(){
		$('.chart').each(function(){
		$(this).easyPieChart({
				size: 150,
				animate: 5000,
				lineCap:'butt',
				scaleColor: false,
				trackColor: '#f9f9f9',
				barColor: '#FA574B',
				lineWidth: 3,
				easing:'easeOutQuad'
			});
		});
	},{offset:'80%'});
        //scroll
        $('body').scrollspy({ target: '#navbar_id' });
        $('[data-spy="scroll"]').each(function () {
              var $spy = $(this).scrollspy('refresh');
            });
        //Smooth Scroll-waypoint
        $('a[href*=#]').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top //same as $(this).attr('href')
            }, 1000);                    //on clicking 'blog' it seems like                                                              //$(#blog).offset().top 
            event.preventDefault();
        });
        // Go Top...
        $('#go-top').click(function(){
            $('html, body').animate({scrollTop : 0},1000);
                return false;
        })