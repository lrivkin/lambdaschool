document.body.style.backgroundColor = "red";
document.getElementById("aboutme").style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
var temp = document.createTextNode("Leah");
var selector = document.getElementById("nickname");
selector.appendChild(temp);

var temp = document.createTextNode("dogs, cookies");
document.getElementById("favorites").appendChild(temp);

var temp = document.createTextNode("Chicago");
document.getElementById("hometown").appendChild(temp);

var c = document.getElementsByTagName('li');
var i;
for (i = 0; i < c.length; i++) {
  c[i].className += " listitem";
}
var c = document.getElementsByClassName("listitem");
for (i=0; i< c.length; i++) {
  c[i].style.color = "green";
}

var x = document.createElement("img");
x.src= 'doggie.jpg';
x.alt = "Dog";
document.body.appendChild(x);