// JavaScript source code
$(function start() {
    $('a[href*="#"]:not([href="#"])') //If you click an "a" that contains a href starting with # then execute scroll
        .click(scroll);
});
function scroll() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body') //If the target is in the html or body then animate to it using the offset in the css and take 1 second to finish the animation
                .animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            $('html, body').clearQueue(); //Clear the anmation queue
            $('html, body, .full-width-tinted, h1, p').click(function () { //if anything in the page is clicked stop the animation
                $('html, body').stop();
            })
            return false;
        }
    }
}
