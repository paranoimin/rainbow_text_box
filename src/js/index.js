(function() {
    $("#q").on("mouseover", function() {
        $("#rainbow").animate({left:"60px"}, 600, "swing");
    }).on("mouseout", function() {
        $("#rainbow").animate({left:"-100%"}, 600, "swing");
    });
}());
