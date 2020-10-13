$(document).ready(function() {
    
    var tlBtn = $('.tl-btn');
    
    function toggleActive(el){
        
        if( el.parents('.timeline__container').length ) {
            var tlContainer = el.parents('.timeline__container');
        }

        var activeLink = tlContainer.find('.nav-link.active');
        var activeTab = tlContainer.find('.tab-pane.active.show')
        var activeItem = activeLink.parent()
        
        function removeActiveClasses(){
            
            activeLink.removeClass('active');
            activeTab.removeClass('active show');  
        }
        
        
        function addActiveClasses(activeItemNew){
            
            var activeLinkNew = activeItemNew.find('.nav-link');
            var activeTabId = activeLinkNew.attr('href');
            var activeTabNew = $(activeTabId)
            
            activeLinkNew.addClass('active')
            activeTabNew.addClass('active show')
        }

        if ( ( el.hasClass('tl-btn-left') ) && ( activeItem.prev().length > 0 ) ) {
            
            var prevItem = activeItem.prev();
            
            removeActiveClasses()
            addActiveClasses(prevItem)

        } else if ( ( el.hasClass('tl-btn-right') ) && ( activeItem.next().length > 0 ) ) {
            
            var nextItem = activeItem.next();
            
            removeActiveClasses()
            addActiveClasses(nextItem)
        }
    }
    

    tlBtn.click(function(){
        toggleActive($(this)) 
    });     
    
});
