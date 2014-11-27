$(function () {

    // Runkeeper Feed
    $.get('http://services.iamnerdwin.com/runkeeper/feed/v2/1162026').done(function (rss) {
        ul = $('.runkeeper-list');
        $(rss).find("item").each(function (i, el) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + $('link', el).text() + '">' + $('title', el).text() + '</a></li>');
        });
    });


    // Instagram Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://iconosquare.com/feed/maxparm',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.instafeed-list');
        var i = 0;
        _.each(r.responseData.feed.entries, function (e) {
            if (e.title.indexOf('7:36pm') != 0) return;
            i+=1;
            if (i > 7) return;
            src = $('img', e.content).attr('src')
            ul.append('<li><a target="_blank" href="' + e.link + '"><img src="' + src + '"/></a></li>');
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
