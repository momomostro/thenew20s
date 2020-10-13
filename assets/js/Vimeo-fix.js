$('.video-container').on('click', function () {
        var vid = $(this).find('.video')[0]
        $(vid).css('display','block');
    });
     $('.video-modal').on('hidden.bs.modal', function (e) {
         var modalVid = $(this).find('video')[0]
         var modaliFrame = $(this).find('iframe')[0]
         if (modalVid !== undefined){
              modalVid.pause();
         } else if (modaliFrame !== undefined){
             
            var options01 = {id: video01};
            var options02 = {id: video02};
            var options03 = {id: video03};
            var options04 = {id: video04};
            var options05 = {id: video05};
            var options06 = {id: video06};
            var options07 = {id: video07};
            var options08 = {id: video08};
            var options09 = {id: video09};
            var options10 = {id: video10};
            var options11 = {id: video11};
             
            var video01Player = new Vimeo.Player('video01', options01);
            var video02Player = new Vimeo.Player('video02', options02);
            var video03Player = new Vimeo.Player('video03', options03);
            var video04Player = new Vimeo.Player('video04', options04);
            var video05Player = new Vimeo.Player('video05', options05);
            var video06Player = new Vimeo.Player('video06', options06);
            var video07Player = new Vimeo.Player('video07', options07);
            var video08Player = new Vimeo.Player('video08', options08);
            var video09Player = new Vimeo.Player('video09', options09);
            var video10Player = new Vimeo.Player('video10', options10);
            var video11Player = new Vimeo.Player('video11', options11);
             
            video01Player.pause();
            video02Player.pause();
            video03Player.pause();
            video04Player.pause();
            video05Player.pause();
            video06Player.pause();
            video07Player.pause();
            video08Player.pause();
            video09Player.pause();
            video10Player.pause();
            video11Player.pause();
    
         }
      })
$('.video-modal-blank').on('hidden.bs.modal', function (e) {
         var modalVid = $(this).find('video')[0]
         var modaliFrame = $(this).find('iframe')[0]
         if (modalVid !== undefined){
              modalVid.pause();
         } else if (modaliFrame !== undefined){
             
            var options12 = {id: video12};
            var options13 = {id: video13};
            var options14 = {id: video14};   
            var options15 = {id: video15};  
             
            var video12Player = new Vimeo.Player('video12', options12);
            var video13Player = new Vimeo.Player('video13', options13);
            var video14Player = new Vimeo.Player('video14', options14);
            var video15Player = new Vimeo.Player('video15', options15);
             
            video12Player.pause();
            video13Player.pause();
            video14Player.pause();
            video15Player.pause();
    
         }
      })