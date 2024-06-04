$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $('.play-button').click(function() {
        var audioElement = $('.audio-element')[0];
        if (audioElement.paused) {
            audioElement.play();
            $(this).find('i').removeClass('fa-music').addClass('fa-pause');
        } else {
            audioElement.pause();
            $(this).find('i').removeClass('fa-pause').addClass('fa-music');
        }
    });
});
