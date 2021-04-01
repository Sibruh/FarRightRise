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
/*jQuery.easing["easeCustom_old1"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
    var tc=ts*t;
    return b+c*(-4*tc*ts + 15*ts*ts + -20*tc + 10*ts);
};
jQuery.easing["easeCustom_old2"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
    var tc=ts*t;
    return b+c*(-4*tc*ts + 13*ts*ts + -15*tc + 6*ts + t);
};
jQuery.easing["easeCustom_old3"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
    var tc=ts*t;
    return b+c*(1*tc*ts + -3*ts*ts + 4*tc + -4*ts + 3*t);
};
jQuery.easing["easeCustom_probeersel"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
  	var tc=ts*t;
  	return b+c*(-1*tc*ts + 3.5*ts*ts + -3*tc + -1*ts + 2.5*t);
};*/
jQuery.easing["easeCustom"] = function(x, t, b, c, d) {
    var ts=(t/=d)*t;
    var tc=ts*t;
    return b+c*(-11*tc*ts + 31*ts*ts + -31*tc + 12*ts);
};
// To use it: $('#elem').animate({width:200},'slow','easeInOutQuad');
$("body").animate({opacity: "1"}, 500, "easeInOutSine" /*"easeOutSine"*/ /*"easeOutQuad"*/, function() {
    $("#timeline").animate({value: "1000"}, 5000, "easeCustom" /*"easeOutSine"*/ /*"easeOutQuad"*/, function() {
        clearInterval(interval);
    });
});
interval = setInterval(updateMap,50);

document.getElementById('Spain').addEventListener('click', function(e) {
    e.currentTarget.setAttribute('fill', '#ff00cc');
});