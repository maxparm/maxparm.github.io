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
    $.get('http://services.iamnerdwin.com/runkeeper/feed/v2/1162026').done(function (rss) {
        ul = $('.runkeeper-list');
        $(rss).find("item").each(function (i, el) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + $('link', el).text() + '">' + $('title', el).text() + '</a></li>');
        });
    });


    // Medium Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://medium.com/feed/@maxparm',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.medium-list');
        _.each(r.responseData.feed.entries, function (e, i) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + e.link + '">' + e.title + '</a></li>');
        });
    });


    // Blog Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feeds.feedburner.com/postach/KgzK',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.blog-list');
        _.each(r.responseData.feed.entries, function (e, i) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + e.link + '">' + e.title + '</a></li>');
        });
    });
});
