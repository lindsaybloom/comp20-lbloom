var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var messages = JSON.parse(this.responseText);
        parse(messages);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function parse(jsonData) {
    var out = "";
    var i;
    var boy = jsonData[0];
    var george = jsonData[1];
    document.getElementById("messages").innerHTML = (boy.content + " " + boy.username + "<br>" + george.content + " " + george.username);
}