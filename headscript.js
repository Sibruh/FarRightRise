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
jQuery.easing["easeColor"] = function(x, t, b, c, d) {
		var ts=(t/=d)*t;
		var tc=ts*t;
		return b+c*(-2*tc + 3*ts);
};

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
// Uncomment for linear interpolation:
		//return rgbToHex(col1[0]*(1-pos)+col2[0]*pos, col1[1]*(1-pos)+col2[1]*pos, col1[2]*(1-pos)+col2[2]*pos);
		return rgbToHex(jQuery.easing["easeColor"](0,pos,col1[0],col2[0]-col1[0],1),
										jQuery.easing["easeColor"](0,pos,col1[1],col2[1]-col1[1],1),
										jQuery.easing["easeColor"](0,pos,col1[2],col2[2]-col1[2],1));
}

var currentScale = 1;

function zoom(isIn) {
    if (isIn) {
        if (currentScale > 2.92) {
            currentScale = 5;
        } else {
            currentScale = currentScale*1.71;
        }
    } else {
        if (currentScale < 1.71) {
            currentScale = 1;
        } else {
            currentScale = currentScale/1.71;
        }
    }
    //document.getElementById("matrixMask").transform.baseVal.getItem(1).setScale(currentScale, currentScale);
    //firstTransform = document.getElementById("matrixMask").transform.baseVal.getItem(0);
    //firstTransformString = "matrix("+firstTransformString['a']+firstTransformString['b']+firstTransformString['c']+firstTransformString['d']+firstTransformString['e']+firstTransformString['f']")";"
    //$("#matrixMask").animate({'transform': "scale("+currentScale+")"}, 1000);
    $('#scaleGroup').css('transform',"scale("+currentScale+")");
}

function getMousePosition(evt) {
    var CTM = svg.getScreenCTM();
    return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
    };
}

function makeDraggable(evt) {
    var svg = evt.target;

    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    svg.addEventListener('touchstart', startDrag);
    svg.addEventListener('touchmove', drag);
    svg.addEventListener('touchend', endDrag);
    svg.addEventListener('touchleave', endDrag);
    svg.addEventListener('touchcancel', endDrag);

    function getMousePosition(evt) {
        var CTM = svg.getScreenCTM();
        if (evt.touches) { evt = evt.touches[0]; }
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    }

    var selectedElement, offset, transform;
    var boundaryX1 = -400;
    var boundaryY1 = -310;
    var boundaryX2 = 890;
    var boundaryY2 = 990;

    function initialiseDragging(evt) {
        offset = getMousePosition(evt);
        // Make sure the first transform on the element is a translate transform
        var transforms = selectedElement.transform.baseVal;

        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
            // Create an transform that translates by (0, 0)
            var translate = svg.createSVGTransform();
            translate.setTranslate(0, 0);
            selectedElement.transform.baseVal.insertItemBefore(translate, 0);
        }

        // Get initial translation
        transform = transforms.getItem(0);
        offset.x -= transform.matrix.e;
        offset.y -= transform.matrix.f;
    }

    function startDrag(evt) {
        selectedElement = evt.target.parentNode;
        initialiseDragging(evt);
        bbox = selectedElement.getBBox();
        if (Math.round(currentScale) == 1) {
            borderScaleCompensation = 0;
        } else if (Math.round(currentScale) == 2) {
            borderScaleCompensation = 0.2;
        } else if (Math.round(currentScale) == 3) {
            borderScaleCompensation = 0.3;
        } else {
            borderScaleCompensation = 0.4;
        }
        minX = boundaryX1-645*borderScaleCompensation - bbox.x;
        minY = boundaryY1-650*borderScaleCompensation - bbox.y;
        maxX = boundaryX2+645*borderScaleCompensation - bbox.x - bbox.width;
        maxY = boundaryY2+650*borderScaleCompensation - bbox.y - bbox.height;
    }

    function drag(evt) {
        if (selectedElement) {
            evt.preventDefault();
            var coord = getMousePosition(evt);
            var dx = coord.x - offset.x;
            var dy = coord.y - offset.y;
            if (dx < minX) { dx = minX; }
            else if (dx > maxX) { dx = maxX; }
            if (dy < minY) { dy = minY; }
            else if (dy > maxY) { dy = maxY; }
            transform.setTranslate(dx, dy);
        }
    }

    function endDrag(evt) {
        selectedElement = false;
    }
  }

/*function curtainFall(b) {
		if (b) {
				$("#ironCurtain").animate({'stroke-dashoffset': 1000}, 3000, "easeInOutSine");
		} else {
				$("#ironCurtain").animate({'stroke-dashoffset': 825}, 3000, "easeInOutSine");
		}
}*/
