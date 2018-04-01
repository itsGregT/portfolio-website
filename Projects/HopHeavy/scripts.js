
$(document).ready(function() {
    $(".mobile-nav ul").hide();
    $("#mobile-nav-icon").click(function() {
        $(".mobile-nav ul").slideToggle(200);
    });
});
