$(function () {

    // Instafeed
    var feed = new Instafeed({
        get: 'user',
        userId: 461656,
        sortBy: 'most-recent',
        limit: 20,
        clientId: 'a00a720282c4443081e55c2aba3af83f',
        accessToken: '461656.a00a720.e2877a3aea6a4be1b11eedc09932ec9b',
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
        filter: function (data) {
            return data.caption.text.indexOf('7:36pm') >= 0;
        }
    });
    feed.run();


    // Runkeeper Feed
    var feed = window.Feed;
    var renderRunkeeperFeed = function (posts) {
        ul = $('.runkeeper-list')
        posts.feed.entries.forEach(function (element, index) {
            ul.append('<li><a target="_blank" href="' + element.link + '">' + element.title + '</a></li>');
        });
    };
    f1 = window.Feed({
        url: 'http://services.iamnerdwin.com/runkeeper/feed/v2/1162026',
        callback: renderRunkeeperFeed
    });


    // Medium Feed
    // var renderMediumFeed = function (posts) {
    //     ul = $('.medium-list')
    //     posts.feed.entries.forEach(function (element, index) {
    //         console.log(element);
    //         ul.append('<li><a target="_blank" href="' + element.link + '">' + element.title + '</a></li>');
    //     });
    // };
    // f2 = window.Feed({
    //     url: 'https://medium.com/feed/@maxparm/',
    //     callback: renderMediumFeed
    // });
});
