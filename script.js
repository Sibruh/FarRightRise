function countryClick(country) {
    //alert(country);
    document.getElementById("textbox").innerHTML = "<h1>" + country.replace("_", " ") + "</h1><p>Lorem ipsum et cetera " + country.replace("_", " ") + "</p>";
    /*if (["Russia", "United_Kingdom", "Danish_Kingdom"].includes(country)) {
        paths = document.getElementById(country).querySelectorAll("path");
        for (i = 0; i < paths.length; i++) {
            paths[i].setAttribute("opacity", "0.3");
        }
    } else {
        document.getElementById(country).setAttribute("opacity", "0.3");
    }*/
}

function mapToColor(value) {
    r = Math.min(value*3);
    g = Math.min(value*3-1);
    b = Math.min(value*3-2);
    return ["rgb(",Math.round(255*r),",",Math.round(255*g),",",Math.round(255*b),")"].join("")
}
