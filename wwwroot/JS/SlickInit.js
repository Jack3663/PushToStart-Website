// JavaScript source code
$(document).ready(function () {
    $('.single-item').slick({
        accessibility: true, //Allows For Tabbing And Arrow Control
        adaptiveHeight: true, //Adapts The Viewport of the gallery to fit the image
        autoplay: true, //Plays and scrolls slide automatically on launch of website
        autoplaySpeed: 5000, //Speed of auto scroll
        arrows: false,//Display arrows
        centerMode: false,//Focus one image and show a bit of the other images
        dots: true,//Display dots
        draggable: true,//Able to drag with the mouse
        fade: false,//Fade or nah
        focusOnSelect: false,//if you select the image it focuses it
        infinite: true,//Infinite or nah
        initialSlide: 0,//Which slide to start on
        mobileFirst: false,//Loads using a mobile first configuration
        pauseOnFocus: true,//Pauses autoplay on focus
        pauseOnHover: false,//Pauses autoplay on hover
        pauseOnDotsHover: false,//Pauses autoplay while hover on dots
        rows: 1,//How many rows of slides
        slidesPerRow: 1,//How many slides per row
        slidesToShow: 1,//How many slides to show regardless of rows
        slidesToScroll: 1,//How many slides to scroll at once
        speed: 600,//Speed of fading/sliding
        swipe: true,//Enable Swiping
        swipeToSlide: false,//Enable Swiping Directly to slides
        touchMove: true,//Enable slide motion with touch
        useCSS: true,//Use css animations
        variableWidth: false,//Adapts the viewport of the gallery to fit image width
        vertical: false,//Vertical swiping mode
        verticalSwiping: false,//Enable vertical swiping
        rtl: false,//Right to left
        responsive: [ //Tablet
            {
                breakpoint: 1024,
                settings: {
                    accessibility: true, //Allows For Tabbing And Arrow Control
                    adaptiveHeight: true, //Adapts The Viewport of the gallery to fit the image
                    autoplay: true, //Plays and scrolls slide automatically on launch of website
                    autoplaySpeed: 5000, //Speed of auto scroll
                    arrows: false,//Display arrows
                    centerMode: false,//Focus one image and show a bit of the other images
                    dots: true,//Display dots
                    draggable: true,//Able to drag with the mouse
                    fade: false,//Fade or nah
                    focusOnSelect: false,//if you select the image it focuses it
                    infinite: true,//Infinite or nah
                    initialSlide: 0,//Which slide to start on
                    mobileFirst: false,//Loads using a mobile first configuration
                    pauseOnFocus: true,//Pauses autoplay on focus
                    pauseOnHover: false,//Pauses autoplay on hover
                    pauseOnDotsHover: false,//Pauses autoplay while hover on dots
                    rows: 1,//How many rows of slides
                    slidesPerRow: 1,//How many slides per row
                    slidesToShow: 1,//How many slides to show regardless of rows
                    slidesToScroll: 1,//How many slides to scroll at once
                    speed: 600,//Speed of fading/sliding
                    swipe: true,//Enable Swiping
                    swipeToSlide: false,//Enable Swiping Directly to slides
                    touchMove: true,//Enable slide motion with touch
                    useCSS: true,//Use css animations
                    variableWidth: false,//Adapts the viewport of the gallery to fit image width
                    vertical: false,//Vertical swiping mode
                    verticalSwiping: false,//Enable vertical swiping
                    rtl: false,//Right to left
                }
            }
        ],
        responsive: [ //Mobile
            {
                breakpoint: 960,
                settings: {
                    accessibility: true, //Allows For Tabbing And Arrow Control
                    adaptiveHeight: true, //Adapts The Viewport of the gallery to fit the image
                    autoplay: true, //Plays and scrolls slide automatically on launch of website
                    autoplaySpeed: 5000, //Speed of auto scroll
                    arrows: false,//Display arrows
                    centerMode: false,//Focus one image and show a bit of the other images
                    dots: true,//Display dots
                    draggable: true,//Able to drag with the mouse
                    fade: false,//Fade or nah
                    focusOnSelect: false,//if you select the image it focuses it
                    infinite: true,//Infinite or nah
                    initialSlide: 0,//Which slide to start on
                    mobileFirst: false,//Loads using a mobile first configuration
                    pauseOnFocus: true,//Pauses autoplay on focus
                    pauseOnHover: false,//Pauses autoplay on hover
                    pauseOnDotsHover: false,//Pauses autoplay while hover on dots
                    rows: 1,//How many rows of slides
                    slidesPerRow: 1,//How many slides per row
                    slidesToShow: 1,//How many slides to show regardless of rows
                    slidesToScroll: 1,//How many slides to scroll at once
                    speed: 600,//Speed of fading/sliding
                    swipe: true,//Enable Swiping
                    swipeToSlide: false,//Enable Swiping Directly to slides
                    touchMove: true,//Enable slide motion with touch
                    useCSS: true,//Use css animations
                    variableWidth: false,//Adapts the viewport of the gallery to fit image width
                    vertical: false,//Vertical swiping mode
                    verticalSwiping: false,//Enable vertical swiping
                    rtl: false,//Right to left
                }
            }

        ]
    });
});