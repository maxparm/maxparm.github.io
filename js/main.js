$(function () {

    // Runkeeper Feed
    // $.get('http://services.iamnerdwin.com/runkeeper/feed/v2/1162026').done(function (rss) {
    // $.get('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feedmyride.net/rides/585974').done(function (rss) {
    //     console.log('rss', rss);
    //     ul = $('.runkeeper-list');
    //     $(rss).find("item").each(function (i, el) {
    //         if (i > 7) return;
    //         ul.append('<li><a target="_blank" href="' + $('link', el).text() + '">' + $('title', el).text() + '</a></li>');
    //     });
    // });


    // Tumblr Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://maxparm.tumblr.com/rss',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.tumblr-list');
        _.each(r.responseData.feed.entries, function (e, i) {
            if (i > 7) return;
            ul.append('<li><a target="_blank" href="' + e.link + '">' + e.title + ' <span>on ' + moment(e.publishedDate).format('llll') + '</span></a></li>');
        });
    });


    // Strava Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feedmyride.net/rides/585974',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.strava-list');
        _.each(r.responseData.feed.entries, function (e, i) {
            if (i > 7) return;
            var sport = e.content.split(':')[0];
            ul.append('<li><a target="_blank" href="' + e.link + '">' + sport + ': ' + e.title + ' <span>on ' + moment(e.publishedDate).format('llll') + '</span></a></li>');
        });
    });


    // 7:36pm Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://iconosquare.com/feed/maxparm',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.seventhirtysix-list');
        var i = 0;
        _.each(r.responseData.feed.entries, function (e) {
            if (e.title.indexOf('7:36pm') != 0) return;
            i+=1;
            if (i > 7) return;
            src = $('img', e.content).attr('src')
            ul.append('<li><a target="_blank" href="' + e.link + '" style="background-image: url(\'' + src + '\')"><div>' + e.title + '</div></a></li>');
        });
    });


    // Plenty Feed
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://iconosquare.com/tagFeed/maxcookstheplentycookbook',
        dataType: 'jsonp'
    }).done(function (r) {
        ul = $('.plenty-list');
        var i = 0;
        _.each(r.responseData.feed.entries, function (e) {
            if (e.author != 'maxparm') return;
            i+=1;
            if (i > 7) return;
            src = $('img', e.content).attr('src')
            title = e.title.replace('#maxcookstheplentycookbook', '');
            ul.append('<li><a target="_blank" href="' + e.link + '" style="background-image: url(\'' + src + '\')"><div>' + title + '</div></a></li>');
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
