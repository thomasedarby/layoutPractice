var i = 0
var txt = "Digital Curriculum Vitae" /* The text */
var speed = 80 /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("tagline").innerHTML += txt.charAt(i)
		i++
		setTimeout(typeWriter, speed)
	}
}

typeWriter()
