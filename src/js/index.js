import $ from 'jquery';
import '../sass/main.scss';
import '../sass/aosp.sass';

function loadComplete() {
    $('body').removeClass('is-preload');
}

$(function () {
    var	$window = $(window);

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            loadComplete();
        }, 100);
    });
    setTimeout(loadComplete, 1000);
});
