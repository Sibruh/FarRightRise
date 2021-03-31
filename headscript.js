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
		if(this.length != 7 && this[0] == '#'){
				throw "Only six-digit hex colors are allowed.";
		}
		var aRgbHex = this.slice(1).match(/.{1,2}/g);
		var aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
		return aRgb;
}

function componentToHex(c) {
	  var hex = c.toString(16);
	  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  	return "#" + componentToHex(Math.round(r)) + componentToHex(Math.round(g)) + componentToHex(Math.round(b));
}

function interpolateColor(hex1, hex2, pos) {
		col1 = hex1.convertToRGB();
		col2 = hex2.convertToRGB();
		return rgbToHex(col1[0]*(1-pos)+col2[0]*pos, col1[1]*(1-pos)+col2[1]*pos, col1[2]*(1-pos)+col2[2]*pos);
}
