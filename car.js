  
function lw()
{
var i = document.getElementById("in1").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://192.168.0.109/cgi-bin/car.py?x=" + i, true);
xhr.send();
xhr.onload= function() {
var i = document.getElementById("in1").value
var output = xhr.responseText;
document.getElementById("d1").innerHTML = output;
}
}
