/* A simple example showing Emojis in use! */

var ❄ = 'snow';
var 👨 = 'man';
var ⛄ = ❄ + 👨;
// outputs 'snowman'
document.write(⛄);

document.write('<br />');

var 🏨 = ["👨","👵","👶"];

if (🏨.indexOf("👵")!=-1){
	document.write("found grandma!");
}
