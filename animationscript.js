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
$("#timeline").animate({value: "1000"}, 8000, "easeOutQuad", function() {clearInterval(interval);});
interval = setInterval(updateMap,50);
