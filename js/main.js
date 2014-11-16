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
    $.get('http://medium.com/feed/@maxparm').done(function (rss) {
        ul = $('.medium-list');
        $(rss).find("item").each(function (i, el) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + $('link', el).text() + '">' + $('title', el).text() + '</a></li>');
        });
    });


    // Blog Feed
    $.get('http://maxparm.postach.io/feed.xml').done(function (rss) {
        ul = $('.blog-list');
        $(rss).find("entry").each(function (i, el) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + $('link', el).attr('href') + '">' + $('title', el).text() + '</a></li>');
        });
    });
});
