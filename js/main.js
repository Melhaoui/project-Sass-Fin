$(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $( "nav a,a.scrollTo" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-100 }, 900);
    });
    
    //Animate on Scroll
    new WOW().init();
    
    $(document).on('scroll',function(){
        var scroll = $(document).scrollTop();
        if(scroll > $("#home").offset().top){
            $("nav a").removeClass('active');
            $('nav a[href="#home"]').addClass('active');
        }
        $("section").each(function(){
            if(scroll > $(this).offset().top-200){
                $("nav a").removeClass('active');
                $('nav a[href="#'+$(this).attr("id")+'"]').addClass('active');
            }
        });
    });
    
});
