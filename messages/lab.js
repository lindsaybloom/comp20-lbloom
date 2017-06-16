function parse() {
    var xmlhttp = new XMLHttpRequest();
    var url = "data.json";

    xmlhttp.open("GET", url, true);
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var messages = JSON.parse(this.responseText);
            var out = "";
            var i;
            var boy = messages[0];
            var george = messages[1];
            document.getElementById("messages").innerHTML = (boy.content + " " + boy.username + "<br>" + george.content + " " + george.username);
        }
    };

    xmlhttp.send();
}