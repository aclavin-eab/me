/* javascript document AndrewClavinLab 00455932 anderwclavin8@gmail.com Chapter4
* Friday September 7th, Monday September 24th,
* validated at http://www.jslint.com/ tolerating . and [^...] in /RegExp/ and 
* missing 'use strict' pragma and assuming a browser on Monday, Sept 24, 2012
*/

//array to contain palindromes for paragraph generation
var record = [];
//array to contain paragraph ids
var paragraphs = [];
var i = 0;



//Constructing Checker
var report = function (f, b) {
	var specimen = document.getElementById("checkit").value,
		nemiceps = specimen.split("").reverse().join("");
	if (f === b && f.length > 3) {
		document.getElementById("result").innerHTML = specimen + " is a palindrome.";
		record.push(specimen);
		//to prevent the existing result2 ond paragraphs from remaining
		document.getElementById("result2").innerHTML = "";
		paragraphs = [];
		//show found palindromes as html pragraphs
		for (i = 0; i < record.length; i += 1) {
			document.getElementById("result2").innerHTML += "<p id=\"para" + i + "\">" + record[i] + "</p>";
			//following line return error in jslint to combine with previous var statement
			//but then the id in the variable is not created yet
			var stylee = document.getElementById("para" + i).style;
			stylee.opacity = Math.random() * 0.4 + 0.1;
			stylee.position = "absolute";
			stylee.top = (Math.random() * 70) + "%";
			stylee.left = (Math.random() * 70) + "%";
			stylee.fontSize = (Math.random() * 7) + "em";
			paragraphs.push("para" + i);
			
			//trying to get result2's p tags to move when clicked
			/*var parent = document.getElementById('result2');
			var paragraphs = parent.getElementsByTagName('p');*/
			/*tryitout = function () {document.getElementByTagName("<p>").onclick.style.top = 10 + "%";}*/
			/*var parent = document.getElementById('result2');
			var paragraphs = parent.getElementsByTagName('p');
			if (paragraphs.onclick = true) {
			paragraphs.style.top = (Math.random() * 70) + "%";}*/
			
		}
	} else if (f === b && f.length <= 3) {
		document.getElementById("result").innerHTML = specimen + " is a palindrome, but you can do better than a three letter word.";
	} else {
		document.getElementById("result").innerHTML = specimen + " backwards is " + nemiceps + "; that is no palindrome.";
	}
	
};



// Reversing the string and negating any non letter characters and actually running script
document.getElementById("palindrome").onclick = function () {
	var fwd = document.getElementById("checkit").value,
		bwd = fwd.split("").reverse().join("");
	fwd = fwd.toLowerCase();
	fwd = fwd.replace(/[^A-Za-z]+/g, '');
	bwd = bwd.toLowerCase();
	bwd = bwd.replace(/[^A-Za-z]+/g, '');
	report(fwd, bwd);
};

// trying to allo clicking on <p>'s in result2 to move them
/*document.getElementById("result2").childNodes[1].onclick = function () {
	document.getElementById("result2").childNodes[1].style.top = (Math.random() * 70) + "%";
	this.style.left = (Math.random() * 70) + "%";
};

var t = document.getElementById('result2').childNodes;
for(i=0; i<t.length; i++) alert(t[i].id);*/

move = function () {
		this.style.top = (Math.random() * 70) + "%" + ";";
	}

//why does this not force para0 to move or p's in general to move??	
//document.getElementById("para0").onclick = move;
document.getElementsByTagName("p").onclick = move;








