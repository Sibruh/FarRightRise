var interval;
function updateMap() {
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    document.getElementById("timeline").dispatchEvent(event);
}
function stopAnimation() {
    $('#timeline').stop();
    clearInterval(interval);
}
$("body").animate({opacity: "1"}, 500, "easeInOutSine" /*"easeOutSine"*/ /*"easeOutQuad"*/, function() {
    $("#timeline").animate({value: "1000"}, 5000, "easeCustom" /*"easeOutSine"*/ /*"easeOutQuad"*/, function() {
        clearInterval(interval);
    });
});
interval = setInterval(updateMap,100);
//document.getElementById("ironCurtain").setAttribute("stroke-dasharray", document.getElementById("ironCurtain").getTotalLength());
