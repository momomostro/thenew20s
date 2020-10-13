    $(".counter__number").appear(function(){
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1300,
            refreshInterval: 60,
        });

    });