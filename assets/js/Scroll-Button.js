$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('.scroll-square').fadeIn(); 
        } else { 
            $('.scroll-square').fadeOut(); 
        } 

    }); 
    $('.scroll-square').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
                 window.location.hash = "";
        return false; 
    }); 
});
