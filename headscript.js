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
