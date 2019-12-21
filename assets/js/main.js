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
        $(".submit-form-btn").attr('disabled', true);
        $('#response').html(`<span class="text-success" style="padding: 20px 0px;"><i class="fa fa-spin fa-spinner"></i> Submitting your query ... Please wait! </span>`);
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
                $('#response').html(`<span class="text-success" style="padding: 20px 0px;"><strong>Your message has been sent. We'll contact you shortly!</strong></span>`);
                //clear all fields
                $('#contact-us-form').trigger("reset");
                $(".submit-form-btn").attr('disabled', false);
            },
            error: function(response) {
                // Fail message
                $('#response').html(`<span class="text-danger" style="padding: 20px 0px;"><strong><strong>Sorry ! Server error, try again or reach us in whatsapp <br>@ <a class="text-danger" href="https://wa.me/+919047155511/?text=hi+there+would+like+to+hear+more+about+ssh+properties" target="_blank">+919047155511</a> </strong></span>`);
                $(".submit-form-btn").attr('disabled', false);
            },
        });

    });

    $(".community-link").on('click', function(event){

        $('body, html').animate({
            scrollTop: $('#details').offset().top - $(window).height() + 330
        }, 1000);
        
        var type = event.target.classList[2];

        if(type === "residential"){
            $(".details-ul").html(`
                <li><i class="fa fa-check"></i>&nbsp; <a>Collect the customer residential requirements ( Selling / Buying / Rental ) clearly</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Discuss with client about market analysis, Current trend etc.</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Schedule an appointment with customer for Site visit</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Brief the property details and if customer is interested in the property</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Close the deal</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "commercial"){
            $(".details-ul").html(`
                <li><i class="fa fa-check"></i>&nbsp; <a>Collect the customer commercial requirements ( Selling / Buying / Rental ) clearly</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Discuss with client about market analysis, Current trend etc.</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Schedule an appointment with customer for Site visit</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Brief the property details and if customer is interested in the property</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Close the deal</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "retail"){
            $(".details-ul").html(`
                <li><i class="fa fa-check"></i>&nbsp; <a>Collect the customer retail requirements ( Selling / Buying / Rental ) clearly</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Discuss with client about market analysis, Current trend etc.</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Schedule an appointment with customer for Site visit</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Brief the property details and if customer is interested in the property</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Close the deal</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "warehouse"){
            $(".details-ul").html(`
                <li><i class="fa fa-check"></i>&nbsp; <a>Collect the customer house ( Selling / Buying / Rental ) requirements clearly</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Discuss with client about market analysis, Current trend etc.</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Schedule an appointment with customer for Site visit</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Brief the property details and if customer is interested in the property</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Close the deal</a></li>
                <li><i class="fa fa-check"></i>&nbsp; <a>Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }
    });

});

window.onload = function() {
    // fadeout loading screen when document is ready
    setTimeout(() => {
        $("#fullscreen-overlay").addClass("closed");
    }, 2000);
};