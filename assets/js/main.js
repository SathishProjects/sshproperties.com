$(document).ready(function () {

    $(window).scroll(function() {
        var nav = $('#navbarMain');
        var top = 200;
        if ($(window).scrollTop() >= top) {
    
            nav.addClass('dark');
    
        } else {
            nav.removeClass('dark');
        }
    });

    $('.carousel').carousel({
        interval: 20000
    });

    new WOW().init();

    $(".overlay-close").on("click", function () {
        $("#contact-form").css("display", "none");
        $("body").css({ 'overflow-y': '', 'position': '', 'width': '', 'top': '' });
        $('.navbar ').addClass('fixed-top');
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
        $('.navbar ').removeClass('fixed-top');
    });

    $("#contact-us-form").on('submit', function(event){
        event.preventDefault();
        var data = {};
        $("#contact-us-form :input").each(function(elem){
            if($(this)[0].name){
                data[$(this)[0].name] = $(this)[0].value;
            }
        });

        $.ajax({
            url: "././mail/contact_me.php",
            type: "POST",
            data: data,
            cache: false,
            success: function(response) {
                // Success message
                $('#response').html(`<span class="text-success" style="padding: 20px 0px;"><strong>Your message has been sent. </strong></span>`);
                //clear all fields
                $('#contact-us-form').trigger("reset");
            },
            error: function(response) {
                // Fail message
                $('#response').html(`<span class="text-danger" style="padding: 20px 0px;"><strong><strong>Sorry ! Server error, try again or reach us in whatsapp <br>@ <a class="text-danger" href="https://wa.me/+919047155511/?text=hi+there+would+like+to+hear+more+about+ssh+properties" target="_blank">+919047155511</a> </strong></span>`);
            },
        });

    });

});

window.onload = function() {
    // fadeout loading screen when document is ready
    setTimeout(() => {
        $("#fullscreen-overlay").addClass("closed");
    }, 2000);
};