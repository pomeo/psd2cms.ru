(function ($) {
$.fn.vAlign = function() {
    return this.each(function(i){
    var h = $(this).height();
    var oh = $(this).outerHeight();
    var mt = (h + (oh - h)) / 2;
    $(this).css("margin-top", "-" + mt + "px");
    $(this).css("top", "50%");
    $(this).css("position", "absolute");
    });
};
$.fn.hAlign = function() {
    return this.each(function(i){
    var w = $(this).width();
    var ow = $(this).outerWidth();
    var ml = (w + (ow - w)) / 2;
    $(this).css("margin-left", "-" + ml + "px");
    $(this).css("left", "50%");
    $(this).css("position", "absolute");
    });
};
})(jQuery);

$(document).ready(function() {
    $(".posts").hAlign();
    $(".commentmeta").fancybox({ 'hideOnContentClick': false });
    $().geekGaTrackPage('UA-3260762-10');
});
