$(document).ready(function () {
    $("#toggle-hours").click(function () {
        $("#hours-content").slideToggle();
    });
}); // Toggle for hours

$(document).ready(function () {
    $(".items").hide();
    $(".accordion").click(function () {
        $(this).next(".items").slideToggle();
    });
}); // Toggle for Flavors

$(document).ready(function () {
    $("#phone-number").hover(
        
        function () {
            $(this).animate({
                fontSize: "24px",
                color: "#C70000"
            }, 300);
        },

        function () {
            $(this).animate({
                fontSize: "18px",
                color: "white"
            }, 300);
        }
    );
}); // Number Hover Animation

$(document).ready(function() {
    $("a[href^='#']").on('click', function(e) { // Selects all anchor links that link to ID
        e.preventDefault();  // Prevent Instant Reaction

        var target = $(this).attr('href'); // Get the Section
        var targetPosition = $(target).offset().top; // Get the position

        
        $('html, body').animate({   // Animate the scroll
            scrollTop: targetPosition
        }, 2000); // Time
    });
}); // Smooth Scroll Animation 

$('article > a > img').hover(
    function() {
        $(this).css('opacity', '0.5');
    }, 
    function() {
        $(this).css('opacity', '1');
    }
); // Gives images with links opacity so user knows its a link.

$('#back-to-top').click(function() {
    $('html').animate({ scrollTop: 0 }, 2000);
}); // Scroll to top