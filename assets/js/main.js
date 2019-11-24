$(document).ready(function () {

    $('.carousel').carousel({
        interval: 20000
    });

    new WOW().init();

    // fadeout loading screen when document is ready
    $("#fullscreen-overlay").addClass("closed");

    $(".overlay-close").on("click", function () {
        $("#contact-form").css("display", "none");
        $("body").css({ 'overflow-y': '', 'position': '', 'width': '', 'top': '' });
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            $("#contact-form").css("display", "none");
            $("body").css({ 'overflow-y': '', 'position': '', 'width': '', 'top': '' });
        }
    });

    $(".menu-contact").on("click", function () {
        $("#contact-form").css("display", "block");
        $("body").css({ 'overflow-y': 'hidden', 'position': 'fixed', 'width': '100%', 'top': '0px' });
    });

});