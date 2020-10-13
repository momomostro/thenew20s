    $(document).ready(function() {
        
        $('.cumple-nav .nav-item .nav-link').click(function() {
            
            var scrollTo = $(this).attr("href");
            
             $('html, body').animate({
               'scrollTop':   $(scrollTo).offset().top
             }, 1500);
            
        })
    });