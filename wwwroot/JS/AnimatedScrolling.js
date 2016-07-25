// JavaScript source code
$(function start() {
    $('a[href*="#"]:not([href="#"])')
        .click(scroll);
});
function scroll() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body')
                .animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            $('html, body').clearQueue();
            $('html, body, .full-width-tinted, h1, p').click(function () {
                $('html, body').stop();
            })
            return false;
        }
    }
}
