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
jQuery.easing["easeCustom"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
    var tc=ts*t;
    return b+c*(-4*tc*ts + 15*ts*ts + -20*tc + 10*ts);
};
// To use it: $('#elem').animate({width:200},'slow','easeInOutQuad');
$("#timeline").animate({value: "1000"}, 6000, "easeCustom" /*"easeOutSine"*/ /*"easeOutQuad"*/, function() {clearInterval(interval);});
interval = setInterval(updateMap,50);
