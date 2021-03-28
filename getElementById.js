document.getElementById("timeline").oninput = function() {
    paths = document.getElementById("Russia").querySelectorAll("path");
    for (i = 0; i < paths.length; i++) {
        paths[i].setAttribute("fill", mapToColor(this.value/1000));
    }
}
