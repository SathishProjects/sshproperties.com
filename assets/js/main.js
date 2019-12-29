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

    $(".overlay-close, .close-popup").on("click", function () {
        $("#contact-form").css("display", "none");
        $("#service-detail-form").css("display", "none");
        $("body").css({ 'overflow-y': '', 'position': '', 'width': '', 'top': '' });
        $('.navbar ').addClass('fixed-top');
    });

    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $("#contact-form").css("display", "none");
            $("#service-detail-form").css("display", "none");
            $("body").css({ 'overflow-y': '', 'position': '', 'width': '', 'top': '' });
            $('.navbar ').addClass('fixed-top');
        }
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
        
        var type = event.target.classList[2];

        $(".details-h2").html(type).css('textTransform', 'capitalize');

        if(type === "residential"){
            $(".details-ul").html(`
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Collect the customer residential requirements (Selling / Buying / Rental) clearly</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Discuss with client about market analysis, Current trend etc.</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Schedule an appointment with customer for Site visit</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Brief the property details and if customer is interested in the property</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Close the deal</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "commercial"){
            $(".details-ul").html(`
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Collect the customer commercial requirements (Selling / Buying / Rental) clearly</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Discuss with client about market analysis, Current trend etc.</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Schedule an appointment with customer for Site visit</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Brief the property details and if customer is interested in the property</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Close the deal</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "retail"){
            $(".details-ul").html(`
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Collect the customer retail requirements (Selling / Buying / Rental) clearly</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Discuss with client about market analysis, Current trend etc.</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Schedule an appointment with customer for Site visit</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Brief the property details and if customer is interested in the property</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Close the deal</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }else if(type === "warehouse"){
            $(".details-ul").html(`
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Collect the customer warehouse (Selling / Buying / Rental) requirements clearly</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Discuss with client about market analysis, Current trend etc.</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Identifying multiple properties and discuss in detail about each property with customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Schedule an appointment with customer for Site visit</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Brief the property details and if customer is interested in the property</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Initiate the Rate negotiation and try to get the best deal for the customer</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Close the deal</a></li>
                <li><a><i class="fa fa-asterisk"></i>&nbsp; Supporting documentation, Registration and Post Sale support</a></li>
            `);
        }

        $("#service-detail-form").css("display", "block");
        $(".service-detail-form").css("visibility", "");
        $("body").css({ 'overflow-y': 'hidden' });
        $('.navbar ').removeClass('fixed-top');
    });

});

window.onload = function() {
    // fadeout loading screen when document is ready
    setTimeout(() => {
        $("#fullscreen-overlay").addClass("closed");
    }, 2000);
};