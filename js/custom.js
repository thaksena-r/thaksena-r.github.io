$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7013943565',
        limit: 24,
        resolution: 'standard_resolution',
        accessToken: '7013943565.1677ed0.9c898b1c8240483b8c8130eb8a37479a',
        sortBy: 'most-recent',
        template: '<div class="col-sm-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery-item').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});

