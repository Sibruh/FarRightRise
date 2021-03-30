/*document.getElementById("timeline").oninput = function() {
    paths = document.getElementById("Russia").querySelectorAll("path");
    for (i = 0; i < paths.length; i++) {
        paths[i].setAttribute("fill", mapToColor(this.value/1000));
    }
}*/

document.getElementById("timeline").oninput = function() {
        if (this.value/1000 >= 0.5899025044398536 && this.value/1000 < 0.644449276938132) {
                document.getElementById("Hungary").setAttribute("fill", "#ea5a3f");
        }
        else if (this.value/1000 >= 0.644449276938132 && this.value/1000 < 0.6974738139248305) {
                document.getElementById("Hungary").setAttribute("fill", "#f06849");
        }
        else if (this.value/1000 >= 0.6974738139248305 && this.value/1000 < 0.7492298213185459) {
                document.getElementById("Hungary").setAttribute("fill", "#c3150e");
        }
        else if (this.value/1000 >= 0.7492298213185459 && this.value/1000 < 0.8022543583052445) {
                document.getElementById("Hungary").setAttribute("fill", "#b30000");
        }
        else if (this.value/1000 >= 0.8022543583052445 && this.value/1000 < 0.855278895291943) {
                document.getElementById("Hungary").setAttribute("fill", "#b00000");
        }
        else if (this.value/1000 >= 0.855278895291943 && this.value/1000 < 0.908049726360045) {
                document.getElementById("Hungary").setAttribute("fill", "#940000");
        }
        else if (this.value/1000 >= 0.908049726360045 && this.value/1000 < 0.9610742633467435) {
                document.getElementById("Hungary").setAttribute("fill", "#970000");
        }
        else if (this.value/1000 >= 0.9610742633467435) {
                document.getElementById("Hungary").setAttribute("fill", "#960000");
        }
        else {
                document.getElementById("Hungary").setAttribute("fill", "#c0c0c0");
        }
}
