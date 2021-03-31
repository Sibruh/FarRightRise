function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function getPaddedDate(date) {
	d = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
	m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
	y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
	return pad(m,2,'0') + '-' + y;
}

String.prototype.convertToRGB = function(){
	if(this.length != 6){
		throw "Only six-digit hex colors are allowed.";
	}
	var aRgbHex = this.match(/.{1,2}/g);
	var aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
	return aRgb;
}

function interpolateColor(hex1, hex2, pos) {
	col1 = hex1.convertToRGB();
	col2 = hex2.convertToRGB();
	return 0;
}
