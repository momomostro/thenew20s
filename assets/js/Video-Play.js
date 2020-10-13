$('.video-container').on('click', function () {
    var vid = $(this).find('.video')[0]
    
    $(vid).css('display','block');
});

 $('.video-modal').on('hidden.bs.modal', function (e) {
     
     var modalVid = $(this).find('video')[0]
     modalVid.pause();
     
  })