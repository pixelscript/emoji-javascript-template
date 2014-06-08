/* Simple examples showing Emojis in use! */

document.write('<h2>Example 1</h2>');
var ❄ = 'snow';
var 👨 = 'man';
var ⛄ = ❄ + 👨;
// outputs 'snowman'
document.write(⛄);

document.write('<h2>Example 2</h2>');
var 🏨 = ["👨","👵","👶"];
if (🏨.indexOf("👵")!=-1){
	document.write("found grandma!");
}
